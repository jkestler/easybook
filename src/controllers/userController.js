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
          console.log(err);
          res.status(500).json({err});
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
      console.log('REQ.USER', req.user);
      // console.log('BACKEND REQ:', req);
      // console.log('BACKEND RESPONSE:', res);
      req.logout();
      res.status(200).json({success: true});
    },

    show(req, res, next) {
      userQueries.getUser(req.params.id, (err, result) => {
        if (err || result.user === undefined) {
          res.status(404).json({ error: err}) 
        } else {
          console.log('Responded with user data');
          // res.json({ result: result});
          res.send(result)
        }
      });
    }

  }