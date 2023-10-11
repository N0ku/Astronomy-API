const express = require("express");
const router = express.Router();

const { getObservable,getObservables } = require("../controllers/observablesController");

module.exports = function () {
  router.get("/", getObservables);
  router.get("/:id", getObservable);

  return router;
};
