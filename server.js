const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const { Webhook } = require('svix');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la base de datos
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

// Ruta del webhook
app.post('/api/webhooks/clerk-webhook', async (req, res) => {
    try {
        // Verificar el secreto del webhook
        const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
        
        if (!WEBHOOK_SECRET) {
            console.error('Falta CLERK_WEBHOOK_SECRET en .env');
            return res.status(500).json({ error: 'Webhook secret no configurado' });
        }

        // Obtener headers
        const svix_id = req.headers['svix-id'];
        const svix_timestamp = req.headers['svix-timestamp'];
        const svix_signature = req.headers['svix-signature'];

        // Verificar headers necesarios
        if (!svix_id || !svix_timestamp || !svix_signature) {
            console.error('Faltan headers de Svix');
            return res.status(400).json({ error: 'Headers inválidos' });
        }

        // Verificar la firma
        const wh = new Webhook(WEBHOOK_SECRET);
        const evt = wh.verify(JSON.stringify(req.body), {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        });

        // Procesar el evento
        console.log('Tipo de evento:', evt.type);
        
        if (evt.type === 'user.created') {
            const { id, email_addresses, first_name, last_name } = evt.data;
            const email = email_addresses[0]?.email_address;

            // Insertar en la base de datos
            await pool.execute(
                'INSERT INTO users (clerk_id, email, first_name, last_name) VALUES (?, ?, ?, ?)',
                [id, email, first_name || null, last_name || null]
            );

            console.log('Usuario guardado:', { id, email });
        }

        res.status(200).json({ message: 'Webhook procesado correctamente' });

    } catch (error) {
        console.error('Error en el webhook:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
