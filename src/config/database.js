const mongoose = require("mongoose");

const connectdb = async () => {
  await mongoose.connect("mongodb+srv://user:pass@cluster0.z8uvi2o.mongodb.net/devTinder");
};

module.exports = connectdb
