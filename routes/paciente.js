// archivo routes/paciente.js

const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// Rutas para pacientes
router.get('/', pacienteController.obtenerPacientes);
router.get('/', pacienteController.buscarPacientePorId);
router.post('/', pacienteController.crearPaciente);
router.put('/:id', pacienteController.editarPaciente);
router.delete('/:id', pacienteController.eliminarPaciente);

module.exports = router;
