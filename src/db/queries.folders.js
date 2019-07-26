const Folder = require('./models').Folder;

module.exports = {

  showFolders(callback) {
    return Folder.all()
    .then((folders) => {
      callback(null, folders);
    })
    .catch((err) => {
      callback(err);
    })
  }

}