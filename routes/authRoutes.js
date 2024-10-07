const express = require('express');
const router = express.Router();
const { register, login, getUserById, updateUser, deleteUser } = require('../controllers/authController');

// Registro y Login
router.post('/register', register);
router.post('/login', login);

// CRUD de usuario
router.get('/users/:id', getUserById); // Obtener usuario por ID
router.put('/users/:id', updateUser);   // Actualizar usuario
router.delete('/users/:id', deleteUser); // Eliminar usuario

module.exports = router;
