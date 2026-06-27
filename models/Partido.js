const mongoose = require('mongoose');

const PartidoSchema = new mongoose.Schema({
    date: { type: String },
    home_team: { type: String },
    away_team: { type: String },
    home_score: { type: Number },
    away_score: { type: Number },
    tournament: { type: String },
    city: { type: String },
    country: { type: String },
    neutral: { type: Boolean }
});

module.exports = mongoose.model('Partido', PartidoSchema, 'partidos');
