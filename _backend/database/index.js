const Sequelize = require('sequelize');
const dbConfig = require('../src/config/database');

const Aluno = require('../models/Aluno');

const connection = new Sequelize(dbConfig);
Aluno.init(connection); // talvez seja aqui: .catch(err => console.log(err))

module.exports = connection;