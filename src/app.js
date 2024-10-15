const express = require("express");
const connectdb = require("./config/database");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello From the server");
});



connectdb()
  .then(() => {
    console.log("Db Connected successfully");
    
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
