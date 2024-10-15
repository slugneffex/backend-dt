const mongoose = require("mongoose");

const connectdb = async () => {
  await mongoose.connect("mongodb+srv://slugneffex:slugneffex@cluster0.z8uvi2o.mongodb.net/devTinder");
};

module.exports = connectdb
