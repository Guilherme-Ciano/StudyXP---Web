const Sequelize = require('sequelize');
const dbConfig = require('../src/config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;