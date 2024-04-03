require('dotenv').config();

const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

const API_KEY = process.env.API_KEY;

module.exports = {
    PORT,
    MONGODB_URI,
    API_KEY
}