const dbController = require("express").Router();
const Question = require("../models/question");

// using questionsDB.questionscollections
dbController.get("/", async (req, res) => {
  const questions = await Question.find({});
  res.json(questions);
});

dbController.get("/:difficulty", async (req, res) => {
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
});

module.exports = dbController;
