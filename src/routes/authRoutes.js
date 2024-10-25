const express = require('express');
const { register, login, verifyEmail, requestPasswordReset, resetPassword } = require('../controllers/authController');
const rateLimiter = require('../middlewares/rateLimit');
const { registerSchema, loginSchema } = require('../validations/authValidation');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

// User registration route with rate limiting and validation
router.post('/register', rateLimiter, validationMiddleware(registerSchema), register);

// User login route with rate limiting and validation
router.post('/login', rateLimiter, validationMiddleware(loginSchema), login);

// Email verification route
router.get('/verify-email/:token', verifyEmail);

// Password reset routes
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
