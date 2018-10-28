const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const config = require("./config/database");

const allRoutes = require("./routes/allRoutes");

//connect to DB
config.connectDB;

const app = express();

//Add CORS headers
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '../dist')));


//Passporrt middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//Router Middleware
app.use(allRoutes);

// catch 404 and forward to error handler
app.all('*', (req, res) => {
  res.status(404).send('Url not found');
});

module.exports = app;