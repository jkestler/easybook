const userQueries = require('../db/queries.users.js');
const passport = require('passport');


module.exports =  {

  create(req, res, next) {

    let newUser = {
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation 
    };

    console.log("NEW USER:", newUser);

    userQueries.createUser(newUser, (err, user) => {
        if (err) {
          console.log(err)
          res.status(500).json(err.errors[0].message);
        } else {
          passport.authenticate('local')(req, res, () => {
            res.status(201).json({id: user.id, username: user.email });
          })
        }
      });

    },

    signIn(req, res, next) {
      passport.authenticate('local')(req, res, () => {
        if(req.user) {
          res.status(200).json({id: req.user.id, username: req.user.email });
        }
      });
    },

    signOut(req, res, next) {
      console.log('BACKEND REQ:', req);
      // req.logout();
      res.status(200).json({success: true});
    }

  }

  // app.get('/loginUser', (req, res, next) => {
  //   passport.authenticate('login', (effrr, user, info) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     if (info != undefined) {
  //       console.log(info.message);
  //       res.send(info.message);
  //     } else {
  //       req.logIn(user, err => {
  //         User.findOne({
  //           where: { 
  //             username: user.username,
  //           },
  //         }).then(user => {
  //           const token = jwt.sign({ id: user.username }, jwtSecret.secret);
  //           res.status(200).send({
  //             auth: true,
  //             token: token,
  //             message: 'user found & logged in',
  //           });
  //         });
  //       });
  //     } 
  //   })(req, res, next);
  // });
  
  // app.post('/registerUser', (req, res, next) => {
  //   passport.authenticate('register', (err, user, info) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     if (info != undefined) {
  //       console.log(info.message);
  //       res.send(info.message);
  //     } else {
  //       req.logIn(user, err => {
  //         const data = {
  //           first_name: req.body.first_name,
  //           last_name: req.body.last_name,
  //           email: req.body.email,
  //           username: user.username,
  //         };
  //         User.findOne({
  //           where: {
  //             username: data.username,
  //           },
  //         }).then(user => {
  //           user
  //             .update({
  //               first_name: data.first_name,
  //               last_name: data.last_name,
  //               email: data.email,
  //             })
  //             .then(() => {
  //               console.log('user created in db');
  //               res.status(200).send({ message: 'user created' });
  //             });
  //         });
  //       });
  //     }
  //   })(req, res, next);
  // });