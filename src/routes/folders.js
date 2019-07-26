const express = require('express');
const router = express.Router();

const folderController = require('../controllers/folderController');
// const validation = require('./validation');

// show all folders 
router.get('/folders', folderController.showAll);

// show individual folder 
// router.get('/folders/:id', folderCreate.showFolder); 

// create folder 
// router.post('/folders/create', validation.validateFolders, folderController.create);

// delete individual folder 
// router.post('/folders/:id/destroy', folderController.destroy);

// update indvidiual folder
// router.post('/folders/:id/update', folderController.update);






// router.get('/folders/new', folderController.new);
// router.get('/folders/:id', folderController.show);

// router.get('/folders/:id/edit', topicController.edit);
// router.post('/folders/:id/destroy', folderController.destroy);
// router.post('/topics/:id/update', validation.validateFolders, folderController.update); 

module.exports = router;