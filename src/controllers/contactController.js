// // controllers/contactController.js
// const { Contact } = require('../models');
// const { Op } = require('sequelize');
// const dateUtils = require('../utils/dateUtils');

// // Add a new contact
// exports.addContact = async (req, res) => {
//   try {
//     const { name, email, phone, address, timezone } = req.body;
//     const newContact = await Contact.create({ name, email, phone, address, timezone });
//     res.status(201).json(newContact);
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding contact', error });
//   }
// };

// // Get contacts with filtering and sorting
// exports.getContacts = async (req, res) => {
//   const { name, email, timezone, sortBy = 'createdAt', order = 'ASC' } = req.query;
//   const filters = {};
//   if (name) filters.name = { [Op.like]: `%${name}%` };
//   if (email) filters.email = { [Op.like]: `%${email}%` };
//   if (timezone) filters.timezone = timezone;

//   try {
//     const contacts = await Contact.findAll({ where: filters, order: [[sortBy, order]] });
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving contacts', error });
//   }
// };

// // Update contact
// exports.updateContact = async (req, res) => {
//   const { id } = req.params;
//   const { name, email, phone, address, timezone } = req.body;

//   try {
//     const contact = await Contact.findByPk(id);
//     if (!contact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }

//     contact.name = name || contact.name;
//     contact.email = email || contact.email;
//     contact.phone = phone || contact.phone;
//     contact.address = address || contact.address;
//     contact.timezone = timezone || contact.timezone;
//     await contact.save();

//     res.json(contact);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating contact', error });
//   }
// };

// // Soft delete contact
// exports.deleteContact = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const contact = await Contact.findByPk(id);
//     if (!contact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }

//     contact.isDeleted = true;
//     await contact.save();

//     res.json({ message: 'Contact deleted successfully.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting contact', error });
//   }
// };

// // Get contacts created within a specific date range
// exports.getContactsByDateRange = async (req, res) => {
//   const { startDate, endDate } = req.query;
//   try {
//     const contacts = await Contact.findAll({
//       where: {
//         createdAt: {
//           [Op.between]: [new Date(startDate), new Date(endDate)]
//         }
//       }
//     });
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving contacts by date range', error });
//   }
// };


// controllers/contactController.js
const Contact = require('../models/Contact'); // Import your contact model

// Add a new contact
const addContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Error adding contact', error });
    }
};

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error });
    }
};

// Get a contact by ID
const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact', error });
    }
};

// Update a contact
const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact', error });
    }
};

// Delete a contact
const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(204).send(); // No content to send back
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact', error });
    }
};

// Exporting all the functions
module.exports = {
    addContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
};
