const express = require('express');
const router = express.Router();
const validation = require('./validation');

const userController = require('../controllers/userController');

// register/create user
router.post('/user', userController.create);

// validation.validateUsers


module.exports = router;