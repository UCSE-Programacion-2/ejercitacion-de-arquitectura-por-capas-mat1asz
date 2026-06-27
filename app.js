const express = require('express');
const app = express();
const connectDB = require('./config/db');
const partidoRoutes = require('./routes/partidoRoutes');

app.use(express.json());

connectDB().catch(console.error);

app.use('/partidos', partidoRoutes);

const PORT = process.env.PORT || 3000;

module.exports = { app };

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}
