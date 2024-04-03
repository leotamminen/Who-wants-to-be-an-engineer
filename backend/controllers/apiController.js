const APIController = require('express').Router();
const Question = require('../models/question');
const QuestionGenerator = require('./apiAIQuestionGenerator');

// APIController.get('/', async (req, res) => {
//     const result = await QuestionGenerator.questionGenerator();
//     console.log("Testi:");
//     console.log(result);
//     res.json(result);
// });

APIController.get('/', async (req, res) => {
    try {
        // Call questionGenerator method from QuestionGenerator class
        const result = await QuestionGenerator.questionGenerator();
        console.log("Testi:");
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = APIController;