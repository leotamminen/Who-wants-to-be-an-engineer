const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");

const apiController = require("./controllers/apiController");
const dbController = require("./controllers/dbController");

const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

const mongoose = require("mongoose");

logger.info("Connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("Error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/apiquestions", apiController);
app.use("/api/dbquestions", dbController);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
