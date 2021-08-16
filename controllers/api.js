const router = require("express").Router();
const Workout = require("../models/workout.js");

router.use("/", views);

router.post("/workouts", (req, res) => {
  //code here
});

router.put("/workouts/:id", (req, res) => {
  //code here
});

module.exports = router;
