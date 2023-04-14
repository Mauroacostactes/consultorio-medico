// archivo models/Medico.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Cita = sequelize.define('cita', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  medico_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  consultorio_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  motivo: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  notas: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Cita;
