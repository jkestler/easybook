const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models").User;
const authHelper = require("../auth/helpers");

module.exports = {
  init(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(
      // usernameField: 'username',
      // emailField: 'email',
      // passwordField: 'password',
      // passwordConfirmation: 'passwordConfirmation'
    // },
    { usernameField: 'email' },
      (email, password, done) => {
        User.findOne({ where: { email } })
        .then((user) => {
          console.log("PASSWORD:", password);
          console.log("USER.PASSWORD", user.password);
          if (!user || !authHelper.comparePass(password, user.password)) { 
            return done(null, false, { message: "Invalid email or password" });
          } 
          console.log(user)
          return done(null, user);
        })
      }

    ));

    passport.serializeUser((user, callback) => {
      callback(null, user.id);
    });
    
    passport.deserializeUser((id, callback) => {
      User.findByPk(id)
        .then((user) => {
          callback(null, user);
        })
        .catch((err => {
          console.log('TROUBLE LOGGING OUT USER:', err) 
          callback(err, user);
        }))
    });
  }
}