const lifelineController = require("express").Router();
const aiApiService = require("../services/aiApiService");
const logger = require('../utils/logger');

lifelineController.post("/askfriend", async (req, res) => {
  const input = req.body.question;
  try {
    // Call questionGenerator method from QuestionGenerator class
    const result = await aiApiService.askFriend(input);
    res.json(result);
  } catch (error) {
    logger.error(error);
    const defaultResponse = {"answer": "Your friend was unable to answer"};
    res.json(defaultResponse);
  }
});

module.exports = lifelineController;