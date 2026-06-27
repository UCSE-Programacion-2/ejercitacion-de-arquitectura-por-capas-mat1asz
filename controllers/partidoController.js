const Partido = require('../models/Partido');

const getPartidos = async (req, res) => {
    try {
        const partidos = await Partido.find().limit(20);
        res.json(partidos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPartidoById = async (req, res) => {
    try {
        const partido = await Partido.findById(req.params.id);
        if (!partido) return res.status(404).json({ error: 'Partido no encontrado' });
        res.json(partido);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createPartido = async (req, res) => {
    try {
        const partido = new Partido(req.body);
        await partido.save();
        res.status(201).json(partido);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updatePartido = async (req, res) => {
    try {
        const partido = await Partido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!partido) return res.status(404).json({ error: 'Partido no encontrado' });
        res.json(partido);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deletePartido = async (req, res) => {
    try {
        const partido = await Partido.findByIdAndDelete(req.params.id);
        if (!partido) return res.status(404).json({ error: 'Partido no encontrado' });
        res.json({ message: 'Partido eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPartidosByTorneo = async (req, res) => {
    try {
        const partidos = await Partido.find({ tournament: req.params.torneo });
        res.json(partidos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPartidosByEquipo = async (req, res) => {
    try {
        const { equipo } = req.params;
        const partidos = await Partido.find({
            $or: [{ home_team: equipo }, { away_team: equipo }]
        });
        res.json(partidos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPartidosByFecha = async (req, res) => {
    try {
        const rango = req.params.rango;
        const fechaInicio = rango.substring(0, 10);
        const fechaFin = rango.substring(11);
        const partidos = await Partido.find({
            date: { $gte: fechaInicio, $lte: fechaFin }
        });
        res.json(partidos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getPartidos,
    getPartidoById,
    createPartido,
    updatePartido,
    deletePartido,
    getPartidosByTorneo,
    getPartidosByEquipo,
    getPartidosByFecha
};
