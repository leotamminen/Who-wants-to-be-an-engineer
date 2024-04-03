const dbController = require('express').Router();
const Question = require('../models/question');

// using questionsDB.questionscollections
dbController.get('/', async (req, res) => {
    const questions = await Question.find({});
    res.json(questions);
});

module.exports = dbController;