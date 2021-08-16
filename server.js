const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const controllers = require("./controllers/view.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(controllers);

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
