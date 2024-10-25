// services/fileService.js
const csv = require('csv-parser');
const { parse } = require('json2csv');
const fs = require('fs');
const Contact = require('../models/Contact');

// Parse CSV/Excel file and process contacts
const processFileUpload = (filePath, userId) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        // Process contacts after file parsing
        const contacts = await Promise.all(results.map(async (row) => {
          const contact = await Contact.create({ ...row, userId });
          return contact;
        }));
        resolve(contacts);
      })
      .on('error', (err) => reject(err));
  });
};

// Generate CSV file for downloading contacts
const generateContactsCSV = async () => {
  const contacts = await Contact.findAll();
  const fields = ['name', 'email', 'phone', 'address', 'timezone', 'createdAt'];
  const csvData = parse(contacts, { fields });
  return csvData;
};

module.exports = {
  processFileUpload,
  generateContactsCSV,
};
