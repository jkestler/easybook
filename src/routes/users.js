const express = require('express');
const router = express.Router();
const validation = require('./validation');

const userController = require('../controllers/userController');

// register/create user
router.post('/user', validation.validateUsers, userController.create);
// sign in user
router.post('/user/signin', validation.validateUsers, userController.signIn);
// sign out user
router.get('/user/signout', userController.signOut);

// get user's folders and bookmarks 
router.get('/user/:id', userController.show);




module.exports = router;

// after registered redirect to /user/bookmarks