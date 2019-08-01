const Folder = require('./models').Folder;
const Bookmark = require('./models').Bookmark;
module.exports = {

  addFolder(newFolder, callback) {
    return Folder.create(newFolder)
    .then((folder) => {
      callback(null, folder)
    })
    .catch((err) => {
      callback(err);
    })
  },

  // get individual folder; include bookmarks
  //  add bookmark include statement
  getFolder(id, callback) {
    return Folder.findByPk(id, {
      include: [{
        model: Bookmark,
        as: "bookmarks",
        required: false,
        where: { folderId: id }
      }]
    })
    .then((folder) => {
      callback(null, folder);
    })
    .catch((err) => {
      callback(err);
    })
  }

}