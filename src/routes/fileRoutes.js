// routes/fileRoutes.js
const express = require('express');
const {uploadFile, downloadContacts} = require('../controllers/fileController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

const router = express.Router();

// Apply auth middleware to protect file routes
router.use(authMiddleware);

// Route for uploading CSV/Excel files for bulk contact creation
router.post('/upload', upload.single('file'), uploadFile);

// Route for downloading contacts as CSV/Excel
// router.get('/download', downloadContacts);

module.exports = router;
