// archivo controllers/pacienteController.js

const Paciente = require('../models/Paciente');

exports.obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.buscarPacientePorId = async (req, res) => {
  const id = req.params.id;
  try {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ mensaje: 'No se encontró un paciente con ese id' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.crearPaciente = async (req, res) => {
  const { nombre, fecha_nacimiento, telefono, correo_electronico } = req.body;

  try {
    const paciente = await Paciente.create({
      nombre,
      fecha_nacimiento,
      telefono,
      correo_electronico,
    });
    res.json(paciente);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.editarPaciente = async (req, res) => {
  const { id } = req.params;
  const { nombre, fecha_nacimiento, telefono, correo_electronico } = req.body;

  try {
    const paciente = await Paciente.update(
      {
        nombre,
        fecha_nacimiento,
        telefono,
        correo_electronico,
      },
      { where: { id } }
    );
    res.json({ mensaje: 'Paciente actualizado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.eliminarPaciente = async (req, res) => {
  const { id } = req.params;

  try {
    await Paciente.destroy({ where: { id } });
    res.json({ mensaje: 'Paciente eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};
