const Sequelize = require('sequelize');
const db = new Sequelize('consultorio_medico', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
