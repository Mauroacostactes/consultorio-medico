// archivo routes/consultorio.js

const express = require('express');
const router = express.Router();
const consultorioController = require('../controllers/consultorioController');

// Rutas para medicos
router.get('/', consultorioController.obtenerConsultorios);
router.get('/',consultorioController.obtenerConsultorioPorId);
router.post('/', consultorioController.crearConsultorio);
router.put('/:id', consultorioController.editarConsultorio);
router.delete('/:id',consultorioController.eliminarConsultorio);

module.exports = router;
