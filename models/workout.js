const mongoose = require("mongoose");

const workoutSchema = new workoutSchma({
  exerciseName: {
    type: String,
    trim: true,
    required: "Name is Required",
  },
  weight: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
  },
  distance: {
    type: Number,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
