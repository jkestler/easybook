const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models").User;
const authHelper = require("../auth/helpers");

module.exports = {
  init(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(

      function(username, password, done) {
        User.findOne({ where: { username: username } })
        .then((user) => {
          if (!user || !authHelper.comparePass(password, user.password)) {
            return done(null, false, {
              message: "Invalid email or password"
            });
          } else {
            return done(null, user);
          }
        })
      }
      
    ));

    passport.serializeUser((user, callback) => {
      callback(null, user.id);
    });
    
    passport.deserializeUser((id, callback) => {
      User.findById(id)
        .then((user) => {
          callback(null, user);
        })
        .catch((err => {
          callback(err, user);
        }))
    });
  }
}

// import jwtSecret from './jwtConfig';
// import bcrypt from 'bcrypt';

// const BCRYPT_SALT_ROUNDS = 12;

// const passport = require('passport'),
//   localStrategy = require('passport-local').Strategy,
//   User = require('../sequelize'),
//   JWTstrategy = require('passport-jwt').Strategy,
//   ExtractJWT = require('passport-jwt').ExtractJwt;

// passport.use(
//   'register',
//   new localStrategy({
//       usernameField: 'username',
//       emailField: 'email',
//       passwordField: 'password',
//       session: false,
//     },
//     (username, password, done) => {
//       try {
//         User.findOne({
//           where: {
//             username: username,
//           },
//         }).then(user => {
//           if (user != null) {
//             console.log('username already taken');
//             return done(null, false, {
//               message: 'username already taken'
//             });
//           } else {
//             bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
//               User.create({
//                 username,
//                 password: hashedPassword
//               }).then(user => {
//                 console.log('user created');
//                 // note the return needed with passport local - remove this return for passport JWT to work
//                 return done(null, user);
//               });
//             });
//           }
//         });
//       } catch (err) {
//         done(err);
//       }
//     },
//   ),
// );

// passport.use(
//   'login',
//   new localStrategy({
//       usernameField: 'username',
//       passwordField: 'password',
//       session: false,
//     },
//     (username, password, done) => {
//       try {
//         User.findOne({
//           where: {
//             username: username,
//           },
//         }).then(user => {
//           if (user === null) {
//             return done(null, false, {
//               message: 'bad username'
//             });
//           } else {
//             bcrypt.compare(password, user.password).then(response => {
//               if (response !== true) {
//                 console.log('passwords do not match');
//                 return done(null, false, {
//                   message: 'passwords do not match'
//                 });
//               }
//               console.log('user found & authenticated');
//               // note the return needed with passport local - remove this return for passport JWT
//               return done(null, user);
//             });
//           }
//         });
//       } catch (err) {
//         done(err);
//       }
//     },
//   ),
// );

// const opts = {
//   jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
//   secretOrKey: jwtSecret.secret,
// };

// passport.use(
//   'jwt',
//   new JWTstrategy(opts, (jwt_payload, done) => {
//     try {
//       User.findOne({
//         where: {
//           username: jwt_payload.id,
//         },
//       }).then(user => {
//         if (user) {
//           console.log('user found in db in passport');
//           // note the return removed with passport JWT - add this return for passport local
//           done(null, user);
//         } else {
//           console.log('user not found in db');
//           done(null, false);
//         }
//       });
//     } catch (err) {
//       done(err);
//     }
//   }),
// );
