const express = require('express');
const path = require('path');
const cors = require('cors');

// Create our app server
const app = express();

// Define our PORT
const PORT = process.env.PORT || 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, '../public')));

// Import all routes
require('./routes/api-routes.js')(app);

const db = require('./models');

// Syncs our database first
db.sequelize.sync().then(() => {
  // Starts our server on the predefined PORT
  app.listen(PORT, () => {
    console.log(`App is now listening on PORT ${PORT}`);
  });
});
