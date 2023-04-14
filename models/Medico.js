// archivo models/Medico.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const options = {
  timestamps: true,
  tableName: 'Medico'
};

const Medico = sequelize.define('medico', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  especialidad: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  consultorio_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'consultorio',
      key: 'id',
    },
  },
}, options,


{
  tableName: 'Medico'
}

);

module.exports = Medico;



