const express = require('express');
const router = express.Router();

router.post('/clerk-webhook', async (req, res) => {
  // Verificar la firma del webhook de Clerk
  const svix_id = req.headers["svix-id"];
  const svix_timestamp = req.headers["svix-timestamp"];
  const svix_signature = req.headers["svix-signature"];
  
  // Si el evento es user.created
  if (req.body.type === 'user.created') {
    const userData = req.body.data;
    
    try {
      // Guardar en tu base de datos
      await db.user.create({
        clerkId: userData.id,
        email: userData.email_addresses[0].email_address,
        firstName: userData.first_name,
        lastName: userData.last_name,
        // otros campos que necesites
      });
      
      res.status(200).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  }
});

module.exports = router; 