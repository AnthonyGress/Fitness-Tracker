const router = require("express").Router();
const Workout = require("../models/workout.js");

router.use("/", views);

router.get("/workouts", (req, res) => {
  // send last workout data
});

router.post("/workouts", (req, res) => {
  // add new workout data
});

router.put("/workouts/:id", (req, res) => {
  //update workout with id here
});

router.get("/workouts/range", (req, res) => {
  // send workout range data
});

module.exports = router;
