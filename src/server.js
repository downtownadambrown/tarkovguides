const express = require('express');
const path = require('path');

// Create our app server
const app = express();

// Define our PORT
const PORT = process.env.PORT || 3080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import all routes
require('./routes/routes.js')(app);

// const db = require('./models');

// Syncs our database first
//db.sequelize.sync().then(function(){

// Starts our server on the predefined PORT
app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`);
});
//});

