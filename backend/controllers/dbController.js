const dbController = require("express").Router();
const Question = require("../models/question");
const logger = require('../utils/logger');

// using questionsDB.questionscollections
dbController.get("/", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (error) {
    logger.error(error.message);
    res.json(null);
  }
});

dbController.get("/:difficulty", async (req, res) => {
  try {
    const questions = await Question.find({});
    const difQuestions = [];
    for (let i = 0; i < questions.length; i++) {
      let obj = questions[i];
      if (obj.difficulty === Number(req.params.difficulty)) {
        difQuestions.push(obj);
      }
    }
    const question = difQuestions[Math.floor(Math.random() * difQuestions.length)];
    res.json(question);
  } catch (error) {
    logger.error(error.message);
    res.json(null);
  }
});

module.exports = dbController;
