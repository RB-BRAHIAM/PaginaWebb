const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Registro
const register = async (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario ya existe
  User.findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error checking user' });
    }
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Si no existe, crear uno nuevo
    User.create(email, password, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error registering user' });
      }
      return res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

// Login
const login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, async (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error finding user' });
    }
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await User.verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  });
};

// Obtener usuario por ID
const getUserById = (req, res) => {
  const userId = req.params.id;

  User.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching user' });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  });
};

// Actualizar usuario
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { email, password } = req.body;

  // Suponiendo que en el modelo User tienes una función update definida
  User.update(userId, email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating user' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User updated successfully' });
  });
};

// Eliminar usuario
const deleteUser = (req, res) => {
  const userId = req.params.id;

  User.delete(userId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting user' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(204).send(); // No content
  });
};

// Exportar las funciones
module.exports = { register, login, getUserById, updateUser, deleteUser };
