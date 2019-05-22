const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

appConfig.init();
routeConfig.init(app);


module.exports = app;

