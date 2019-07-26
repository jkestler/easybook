const folderQueries = require('../db/queries.folders.js');

module.exports = {

  showAll(req, res, next) {
    folderQueries.showFolders((err, folders) => {
      if (err) {
        console.log(err);
        res.status(404)
      } else {
        res.json({ folders: folders });
      }
    })
  }
}