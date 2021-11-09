const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Declare the schema for exercise by creating a new Schema object
const userSchema = new Schema({
    // 1 field in the user schema
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,  // will trim whitespace off the end if there is any
        minlength: 3
    }
}, {
    timestamps: true  // creates fields for when created and when modified
});

// Use Schema object with mongoose method to create exportable model
const User = mongoose.model('User', userSchema);

module.exports = User;