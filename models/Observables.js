const mongoose = require("mongoose");

const observableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img_src: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Observables = mongoose.model("Observables", observableSchema, "Observables");

module.exports = Observables;
