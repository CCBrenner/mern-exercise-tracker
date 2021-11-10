const router = require('express').Router(); // we need Router() here
let User = require('../models/user.model');  // import the user model

// 1 route, GET request, getting a user's data
router.route('/').get((req, res) => {
   User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// another route, POST request, adding a user to the DB
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
     .then(() => res.json('User added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;  // export the router for Express to use