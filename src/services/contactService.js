// services/contactService.js
const Contact = require('../models/Contact');

// Add a new contact
const addContact = async (contactData, userId) => {
  const contact = await Contact.create({ ...contactData, userId });
  return contact;
};

// Get contacts with filtering and sorting
const getContacts = async (filters, options) => {
  const contacts = await Contact.findAll({
    where: filters,
    order: options.order,
  });
  return contacts;
};

// Get contact by ID
const getContactById = async (id) => {
  const contact = await Contact.findByPk(id);
  return contact;
};

// Update contact details
const updateContact = async (id, updatedData) => {
  const contact = await Contact.findByPk(id);
  if (contact) {
    await contact.update(updatedData);
    return contact;
  }
  return null;
};

// Soft delete a contact
const deleteContact = async (id) => {
  const contact = await Contact.findByPk(id);
  if (contact) {
    await contact.destroy();
    return true;
  }
  return false;
};

// Batch process contacts (add or update multiple contacts)
const batchProcessContacts = async (contactsData, userId) => {
  const contacts = await Promise.all(
    contactsData.map(async (contactData) => {
      if (contactData.id) {
        const contact = await updateContact(contactData.id, contactData);
        return contact;
      } else {
        const contact = await addContact(contactData, userId);
        return contact;
      }
    })
  );
  return contacts;
};

module.exports = {
  addContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
  batchProcessContacts,
};
