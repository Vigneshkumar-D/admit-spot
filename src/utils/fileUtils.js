
const fs = require('fs');
const path = require('path');

// Check if a file exists
const fileExists = (filePath) => {
  return fs.existsSync(filePath);
};

// Delete a file
const deleteFile = (filePath) => {
  if (fileExists(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// Get the full path for a file upload directory
const getUploadPath = (fileName) => {
  const uploadDir = path.join(__dirname, '../uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  return path.join(uploadDir, fileName);
};

// Save uploaded file
const saveFile = (file, filePath) => {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filePath);
    stream.write(file.buffer);
    stream.end();

    stream.on('finish', () => resolve(true));
    stream.on('error', (err) => reject(err));
  });
};

module.exports = {
  fileExists,
  deleteFile,
  getUploadPath,
  saveFile,
};
