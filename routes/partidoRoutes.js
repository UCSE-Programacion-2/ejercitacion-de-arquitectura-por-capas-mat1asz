const express = require('express');
const router = express.Router();
const {
    getPartidos,
    getPartidoById,
    createPartido,
    updatePartido,
    deletePartido,
    getPartidosByTorneo,
    getPartidosByEquipo,
    getPartidosByFecha
} = require('../controllers/partidoController');

// Rutas especializadas antes de /:id para evitar conflictos
router.get('/torneo/:torneo', getPartidosByTorneo);
router.get('/equipo/:equipo', getPartidosByEquipo);
router.get('/fecha/:rango', getPartidosByFecha);

// CRUD básico
router.get('/', getPartidos);
router.get('/:id', getPartidoById);
router.post('/', createPartido);
router.put('/:id', updatePartido);
router.delete('/:id', deletePartido);

module.exports = router;
