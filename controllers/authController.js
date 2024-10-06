const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Registro
const register = async (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario ya existe
  User.findByEmail(email, (err, user) => {
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

module.exports = { register, login };
