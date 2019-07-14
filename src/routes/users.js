const express = require('express');
const router = express.Router();
const validation = require('./validation');

const userController = require('../controllers/userController');

// register/create user
router.post('/user', validation.validateUsers, userController.create);
router.post('/user/signin', validation.validateUsers, userController.signIn);
router.get('/user/signout', userController.signOut);

// validation.validateUsers




module.exports = router;

// after registered redirect to /user/bookmarks