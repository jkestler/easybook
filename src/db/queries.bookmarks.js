const Folder = require('./models').Folder;
const Bookmark = require('./models').Bookmark;


module.exports = {

  addBookmark(newBookmark, callback) {
    return Bookmark.create(newBookmark)
    .then((bookmark) => {
      callback(null, bookmark);
    })
    .catch((err) => {
      callback(err);
    });
  },

  getBookmark(id, callback) {
    return Bookmark.findByPk(id)
    .then((bookmark) => {
      callback(null, bookmark);
    })
    .catch((err) => {
      callback(err);
    })
  }
  
}