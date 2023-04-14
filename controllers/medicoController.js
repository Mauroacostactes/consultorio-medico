// archivo controllers/medicoController.js

const Medico = require('../models/Medico');

exports.obtenerMedicos = async (req, res) => {
  try {
    const medicos = await Medico.findAll({
      attributes: ['id', 'nombre', 'especialidad', 'telefono', 'correo_electronico', 'consultorio_id']
    });
    return res.render('index', {medicos: medicos})
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};


exports.crearMedico = async (req, res) => {
  const { nombre, especialidad, telefono, correo_electronico, consultorio_id } = req.body;

  try {
    const medico = await Medico.create({
      nombre,
      especialidad,
      telefono,
      correo_electronico,
      consultorio_id,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.buscarMedicoPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const medico = await Medico.findByPk(id);
    if (medico) {
      res.json(medico);
    } else {
      res.status(404).json({ mensaje: 'No se encontró un médico con ese id' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

exports.editarMedico = async (req, res) => {
  const id = req.params.id;
  const { nombre, especialidad, telefono, correo_electronico, consultorio_id } = req.body;
  try {
    const medico = await Medico.findByPk(id);
    if (medico) {
      await medico.update({
        nombre: req.body.nombre,
        especialidad: req.body.especialidad,
        telefono: req.body.telefono,
        correo_electronico: req.body.correo_electronico,
        consultorio_id: req.body.consultorio_id,
      });
      
      res.redirect('/')
    } else {
      res.status(404).json({ mensaje: 'No se encontró un médico con ese id' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
 
};

exports.eliminarMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const medico = await Medico.findByPk(id);
    if (medico) {
      await medico.destroy();
      res.json({ mensaje: 'El médico fue eliminado correctamente' });
    } else {
      res.status(404).json({ mensaje: 'No se encontró un médico con ese id' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};
