// config/jwtConfig.js
require('dotenv').config();

module.exports = {
  secret: process.env.JWT_SECRET || 'your_jwt_secret', // Use a strong secret from .env
  expiresIn: process.env.JWT_EXPIRES_IN || '1h',      // Token expiration (1 hour)
};
