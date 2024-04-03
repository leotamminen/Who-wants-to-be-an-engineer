const DBController = require('express').Router();
const Question = require('../models/question');

// DBController.get('/', async (req, res) => {
//     const questions = await Question.find({});
//     res.json(questions);
// });

module.exports = DBController;