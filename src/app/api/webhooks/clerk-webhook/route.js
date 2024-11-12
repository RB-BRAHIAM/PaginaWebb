import { Webhook } from 'svix';
import { headers } from 'next/headers';
import pool from '@/lib/db';

export async function POST(req) {
  try {
    // 1. Verificar el secreto del webhook
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    
    if (!WEBHOOK_SECRET) {
      console.error('Falta CLERK_WEBHOOK_SECRET en .env');
      return new Response('Error: Webhook secret no configurado', {
        status: 500
      });
    }

    // 2. Obtener los headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // 3. Verificar headers necesarios
    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error('Faltan headers de Svix');
      return new Response('Error: Headers inválidos', {
        status: 400
      });
    }

    // 4. Obtener y procesar el body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // 5. Verificar la firma
    const wh = new Webhook(WEBHOOK_SECRET);
    const evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });

    // 6. Procesar el evento
    console.log('Tipo de evento:', evt.type);
    
    if (evt.type === 'user.created') {
      const { id, email_addresses, first_name, last_name, ...attributes } = evt.data;
      const email = email_addresses[0]?.email_address;

      console.log('Nuevo usuario recibido:', {
        id,
        email,
        first_name,
        last_name
      });

      // Insertar en la base de datos
      const connection = await pool.getConnection();
      try {
        const [result] = await connection.execute(
          'INSERT INTO users (clerk_id, email, first_name, last_name) VALUES (?, ?, ?, ?)',
          [id, email, first_name || null, last_name || null]
        );

        console.log('Usuario guardado en la base de datos:', result);
      } catch (dbError) {
        console.error('Error al guardar en la base de datos:', dbError);
        throw dbError;
      } finally {
        connection.release();
      }
    }

    return new Response('Usuario procesado y guardado correctamente', {
      status: 200
    });

  } catch (error) {
    console.error('Error en el webhook:', error);
    return new Response('Error interno', {
      status: 500
    });
  }
} 