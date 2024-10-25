// services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwtConfig = require('../config/jwtConfig');

// Generate a JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn }
  );
};

// Verify JWT token
const verifyToken = (token) => {
  return jwt.verify(token, jwtConfig.secret);
};

// Authenticate user by email and password
const authenticateUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (user && await user.comparePassword(password)) {
    return user;
  }
  return null;
};

module.exports = {
  generateToken,
  verifyToken,
  authenticateUser,
};
