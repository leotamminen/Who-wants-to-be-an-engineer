const APIController = require('express').Router();
const Question = require('../models/question');

APIController.get('/', async (req, res) => {
    res.send('TESTI');
});

module.exports = APIController;