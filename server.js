// server.js o app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa cors
const authRoutes = require('./routes/authRoutes'); // Asegúrate de que este archivo sea el correcto

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(bodyParser.json());

// Usa las rutas de autenticación
app.use('/api/auth', authRoutes);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
