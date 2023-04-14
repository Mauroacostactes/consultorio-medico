// archivo routes/medico.js

const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

// Rutas para medicos
router.get('/', medicoController.obtenerMedicos);
router.get('/buscar/:id', medicoController.buscarMedicoPorId)
router.post('/crear', medicoController.crearMedico);
router.put('/editar/:id', medicoController.editarMedico);
router.delete('/borrar/:id', medicoController.eliminarMedico); 


module.exports = router;
