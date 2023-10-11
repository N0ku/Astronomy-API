const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require("./db/connect");
require("dotenv").config();
const mongoose = require("mongoose");

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 5050;

// Routes
const eventsRoutes = require("./routes/EventsRoutes");
const observablesRoutes = require("./routes/ObservablesRoutes");

app.use("/events", eventsRoutes());
app.use("/observables", observablesRoutes());


const mongoURI = `${process.env.DATABASE_URL}${process.env.DATABASE_NAME}`;

connectDb(mongoURI);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("open", () => {
  console.log("Database Connected");
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
