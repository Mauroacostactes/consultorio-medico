// archivo controllers/citasController.js

const Cita = require('../models/Cita');

exports.obtenerCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll();
    res.json(citas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.crearCita = async (req, res) => {
  const { fecha_hora, medico_id, paciente_id, consultorio_id, motivo, notas } = req.body;

  try {
    const cita = await Cita.create({
      fecha_hora,
      medico_id,
      paciente_id,
      consultorio_id,
      motivo,
      notas,
    });
    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.obtenerCitaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ mensaje: 'No se encontró la cita' });
    }
    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.editarCita = async (req, res) => {
  const { id } = req.params;
  const { fecha_hora, medico_id, paciente_id, consultorio_id, motivo, notas } = req.body;

  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ mensaje: 'No se encontró la cita' });
    }

    cita.fecha_hora = fecha_hora;
    cita.medico_id = medico_id;
    cita.paciente_id = paciente_id;
    cita.consultorio_id = consultorio_id;
    cita.motivo = motivo;
    cita.notas = notas;

    await cita.save();
    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.eliminarCita = async (req, res) => {
  const { id } = req.params;

  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ mensaje: 'No se encontró la cita' });
    }

    await cita.destroy();
    res.json({ mensaje: 'Cita eliminada correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};
