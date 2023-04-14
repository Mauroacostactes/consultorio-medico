// archivo routes/cita.js

const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

// Rutas para citas
router.get('/', citaController.obtenerCitas);
router.post('/', citaController.crearCita);
router.get('/:id', citaController.obtenerCitaPorId);
router.put('/:id', citaController.editarCita);
router.delete('/:id', citaController.eliminarCita);

module.exports = router;
