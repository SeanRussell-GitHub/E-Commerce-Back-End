const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();

// Use environment variable to connect to the database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
      decimalNumbers: true,
      },
    });

module.exports = sequelize;
