const express = require('express');
const router = express.Router();

const bookmarkController = require('../controllers/bookmarkController');


// * Must have 
// create bookmark
router.post('/folders/:folderId/bookmark/create', bookmarkController.create);

// show individual bookmark
router.get('/folders/:folderId/bookmark/:id', bookmarkController.showBookmark);


// * Nice to have 

// delete individual folder 
// router.post('/folders/:id/destroy', folderController.destroy);

// update indvidiual folder
// router.post('/folders/:id/update', folderController.update);f

module.exports = router;