const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Configures to have environment variables in the .env file
require('dotenv').config();

// Create Express server and port variable
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());  // able to parse JSON

// Mongoose module assistance in establishing connection to MongoDB db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
});

// Express server listens for new HTTP requests...
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});