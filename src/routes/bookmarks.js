const express = require('express');
const router = express.Router();

const bookmarkController = require('../controllers/bookmarkController');

router.get('/bookmarks', bookmarkController.index);

module.exports = router;