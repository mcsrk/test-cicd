const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) =>
  res.json("API Running + CICD no effort. Little text")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
