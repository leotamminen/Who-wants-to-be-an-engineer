const APIController = require("express").Router();
const Question = require("../models/question");
const QuestionGenerator = require("./apiAIQuestionGenerator");
const logger = require('../utils/logger');

APIController.get("/", async (req, res) => {
  try {
    // Call questionGenerator method from QuestionGenerator class
    const result = await QuestionGenerator.questionGenerator();
    res.json(result);
  } catch (error) {
    logger.error(error);
    res.json(null);
  }
});

module.exports = APIController;
