const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const Partido = require('../models/Partido');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf-8'));

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Partido.deleteMany({});
        await Partido.insertMany(data);
        console.log(`${data.length} partidos importados correctamente`);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error al importar datos:', err);
        process.exit(1);
    });
