const router = require("express").Router();
const Workout = require("../models/workout.js");

// /api routes

router.get("/workouts", (req, res) => {
  // send last workout data
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts", ({ body }, res) => {
  // add new workout data
  // const workout = new db.Workout(body);
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", ({ body, params }, res) => {
  //update workout with id here
  const workout = body;
  Workout.findByIdAndUpdate(
    { _id: `${params.id}` },
    { $push: { exercises: workout } }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  // send workout range data
  // TODO limit range to 7 days
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
