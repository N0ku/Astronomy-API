const express = require("express");
const router = express.Router();

const { getEvents, getEvent } = require("../controllers/observablesController");

module.exports = function () {
  router.get("/", getEvents);
  router.get("/:id", getEvent);

  return router;
};
