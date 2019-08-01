const folderQueries = require('../db/queries.folders.js');

module.exports = {

  create(req, res, next) {
    let newFolder = {
      folderName: req.body.folderName,
      userId: req.body.userId
    };

    folderQueries.addFolder(newFolder, (err, folder) => {
      if (err) {
        console.log(err);
        res.status(500).json({err});
      } else {
        console.log(newFolder);
        res.status(201).json({folder: folder.folderName });
      }
    });
  },

  showFolder(req, res, next) {
    folderQueries.getFolder(req.params.id, (err, folder) => {
      if (err || folder == null) {
        res.status(400).json({err});
      } else {
        res.status(200).json({ folder });
        console.log(folder);
      }
    });
  }
  
}