// // middlewares/validationMiddleware.js
// const { validationResult } = require('express-validator');

// // Middleware to handle validation errors
// const validationMiddleware = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
//   }
//   next(); // Proceed to the next middleware or route handler if validation passes
// };

// module.exports = validationMiddleware;


// middlewares/authMiddleware.js


// middlewares/validationMiddleware.js
const { ValidationError } = require('joi');

const validationMiddleware = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body); // Validate the request body against the schema

    if (error) {
        return res.status(400).json({ message: error.details[0].message }); // Send back validation error
    }

    next(); // Proceed to the next middleware or route handler if validation passes
};

module.exports = validationMiddleware;
