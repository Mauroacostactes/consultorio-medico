// archivo controllers/consultorioController.js

const Consultorio = require('../models/Consultorio');

exports.obtenerConsultorios = async (req, res) => {
  try {
    const consultorios = await Consultorio.findAll();
    res.json(consultorios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.obtenerConsultorioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      return res.status(404).json({ mensaje: 'No se encontró el consultorio' });
    }
    res.json(consultorio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error 500' });
  }
};


exports.crearConsultorio = async (req, res) => {
  const { nombre, direccion, telefono, correo_electronico } = req.body;

  try {
    const consultorio = await Consultorio.create({
      nombre,
      direccion,
      telefono,
      correo_electronico,
    });
    res.json(consultorio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.editarConsultorio = async (req, res) => {
  const { nombre, direccion, telefono, correo_electronico } = req.body;
  const { id } = req.params;

  try {
    const consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      res.status(404).json({ mensaje: 'Consultorio no encontrado' });
      return;
    }
    consultorio.nombre = nombre;
    consultorio.direccion = direccion;
    consultorio.telefono = telefono;
    consultorio.correo_electronico = correo_electronico;
    await consultorio.save();
    res.json(consultorio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.eliminarConsultorio = async (req, res) => {
  const { id } = req.params;

  try {
    const consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      res.status(404).json({ mensaje: 'Consultorio no encontrado' });
      return;
    }
    await consultorio.destroy();
    res.json({ mensaje: 'Consultorio eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};
