const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/config.js");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("working...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
