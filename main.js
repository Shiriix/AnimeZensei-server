const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT ?? 5050;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/", (req, res, next) => {
  const now = new Date();
  console.log(`Request Path: ${req.path}`);
  console.log(`Request Time: ${now.toLocaleString()}`);
  next();
});

app.listen(port, function (req, res) {
  console.log(`Server is running on port ${port}`);
});
