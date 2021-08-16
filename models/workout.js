const mongoose = require("mongoose");

const workoutSchema = new workoutSchma({
  day: {},
  exercises: {},
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
