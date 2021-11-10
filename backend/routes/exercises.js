const router = require('express').Router();  // Router() is needed here by Express
const Exercise = require('../models/exercise.model');  // import the Exercise model

// 1 route, GET request, retrieves an exercise from the DB
router.route('/').get((req, res) => {
    Exercise.find()
     .then(exercises => res.json(exercises))
     .catch(err => res.status(400).json('Error: ' + err));
});

// another route, POST request, posts a new exercise to the DB
router.route('/add').post((req, res) => {
    // save/declare form/request data to variables
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);  // conversion of type necessary (received type is type Number)
    const date = Date.parse(req.body.date);  // parsing necessary (received type is type String)

    // create a newExercise object with declared data
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
});

    // finally, save the new exercise to the DB and throw and error if there is one
    newExercise.save()
     .then(() => res.json('Exercise added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;  // export the router for Express to use