const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri || mongoose.connection.readyState !== 0) return;
    await mongoose.connect(uri);
};

module.exports = connectDB;
