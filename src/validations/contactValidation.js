const Joi = require('joi');

// Contact creation validation schema
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]+$/).optional(),
  address: Joi.string().max(200).optional(),
  timezone: Joi.string().required(),
});

// Contact update validation schema
const updateContactSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().pattern(/^[0-9]+$/).optional(),
  address: Joi.string().max(200).optional(),
  timezone: Joi.string().optional(),
});

// Validation schema for filtering contacts
const filterContactSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  timezone: Joi.string().optional(),
});

module.exports = {
  contactSchema,
  updateContactSchema,
  filterContactSchema,
};
