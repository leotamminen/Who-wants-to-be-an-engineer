const APIController = require("express").Router();
const aiApiService = require("../services/aiApiService");
const logger = require("../utils/logger");

APIController.get("/", async (req, res) => {
  try {
    // Call questionGenerator method from QuestionGenerator class
    const result = await aiApiService.questionGenerator();
    res.json(result);
  } catch (error) {
    logger.error(error);
    res.json(null);
  }
});

module.exports = APIController;
