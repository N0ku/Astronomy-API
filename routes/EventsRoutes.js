const express = require("express");
const router = express.Router();

const {
    getEvents,
    getEvent,
} = require("../controllers/eventsController");

module.exports = function () {
    router.get("/", getEvents);
    router.get("/:id", getEvent);

  return router;
};
