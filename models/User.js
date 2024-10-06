const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  create: async (email, password, callback) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  findByEmail: (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result[0]);
    });
  },

  verifyPassword: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  }
};

module.exports = User;
