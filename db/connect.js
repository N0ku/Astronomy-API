const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

/**
 * The function `connectDb` connects to a MongoDB database using the provided URL.
 * @param url - The `url` parameter is the connection string for the MongoDB database. It specifies the
 * location and credentials (if required) for connecting to the database.
 * @returns The `connectDb` function is returning the result of `mongoose.connect(url, {
 * useNewUrlParser: true, useUnifiedTopology: true })`.
 */
const connectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
