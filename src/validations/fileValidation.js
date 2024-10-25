
const Joi = require('joi');

// File upload validation schema for CSV/Excel
const fileUploadSchema = Joi.object({
  file: Joi.object({
    mimetype: Joi.string().valid('text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel').required(),
    size: Joi.number().max(5 * 1024 * 1024).required(), // Limit to 5MB
  }).required(),
});

module.exports = {
  fileUploadSchema,
};
