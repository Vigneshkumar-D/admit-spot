// controllers/fileController.js
const multer = require('multer');
const { Contact } = require('../models');
const fileUtils = require('../utils/fileUtils');

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Handle CSV/Excel upload
exports.uploadFile = [
  upload.single('file'), // Middleware to handle single file upload
  async (req, res) => {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: 'File upload required' });
    }

    try {
      // Parse the uploaded file (CSV or Excel)
      const contacts = await fileUtils.parseFile(file.path);

      // Bulk insert contacts into the database
      await Contact.bulkCreate(contacts);

      res.json({ message: 'File uploaded and contacts saved successfully', contacts });
    } catch (error) {
      res.status(500).json({ message: 'Error processing file', error });
    }
  }
];
