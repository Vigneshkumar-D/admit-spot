// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME,         // Database name
  process.env.DB_USER,         // Database username
  process.env.DB_PASSWORD,     // Database password
  {
    host: process.env.DB_HOST, // Database host
    dialect: process.env.DB_DIALECT || 'postgres', // PostgreSQL or MySQL
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port
    logging: false,            // Disable logging queries (optional)
    pool: {
      max: 5,                  // Maximum number of connections in pool
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection(); // Test the connection when server starts

module.exports = sequelize;
