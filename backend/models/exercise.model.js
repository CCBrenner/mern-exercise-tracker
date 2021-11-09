const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Declare the schema for exercise by creating a new Schema object
const exerciseSchema = new Schema({
    // 4 fields in the exercise schema
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,  // creates fields for when created and when modified
});

// Use Schema object with mongoose method to create exportable model
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Export the model
module.exports = Exercise;