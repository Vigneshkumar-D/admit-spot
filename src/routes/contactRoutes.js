// routes/contactRoutes.js
const express = require('express');
const contactController = require('../controllers/contactController');
const authMiddleware = require('../middlewares/authMiddleware');
const { contactValidation } = require('../validations/contactValidation');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

// Apply auth middleware to protect all contact routes
router.use(authMiddleware);

// CRUD routes for contacts
router.post('/', validationMiddleware(contactValidation), contactController.addContact);
router.get('/', contactController.getContacts);
router.get('/:id', contactController.getContactById);
router.put('/:id', validationMiddleware(contactValidation), contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

// Batch processing routes
// router.post('/batch', contactController.batchProcessContacts);

module.exports = router;
