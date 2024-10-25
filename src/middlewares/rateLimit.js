// middlewares/rateLimit.js
const rateLimit = require('express-rate-limit');

// Middleware to limit repeated requests to sensitive endpoints
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

module.exports = rateLimiter;
