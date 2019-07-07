const logger = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const flash = require('express-flash');
const passportConfig = require('./passport-config');

require('dotenv').config();

module.exports = {
  init(app, express) {  
    // Parse incoming requests data (https://github.com/expressjs/body-parser)
    app.use(bodyParser.json());

    // Log requests to the console.
    app.use(logger('dev'));

    app.use(expressValidator());

    app.use(bodyParser.json());

    app.use(session({
      secret: process.env.cookieSecret,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1.21e+9 }
    }));

    app.use(flash());
    
    passportConfig.init(app);

    app.use((req, res, next) => {
      res.locals.currentUser = req.user;
      next();
    });
  }

}



