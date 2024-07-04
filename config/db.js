require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error('MongoDB URI is not defined in .env file');
    process.exit(1);
}

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
