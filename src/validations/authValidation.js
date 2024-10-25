
const Joi = require('joi');

// User registration validation schema
const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required(),
});

// User login validation schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Password reset validation schema
const passwordResetSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().length(6).required(),
  newPassword: Joi.string().min(6).max(30).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  passwordResetSchema,
};
