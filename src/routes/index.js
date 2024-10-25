// routes/index.js
const authRoutes = require('./authRoutes');
const contactRoutes = require('./contactRoutes');
const fileRoutes = require('./fileRoutes');

const setupRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/contacts', contactRoutes);
  app.use('/api/files', fileRoutes);
};

module.exports = setupRoutes;
