const bookmarkQueries = require('../db/queries.bookmarks.js');

module.exports = {

  create(req, res, next) {
    let newBookmark = {
      url: req.body.url,
      title: req.body.title,
      description: req.body.description !== '' ? req.body.description : 'This bookmark has no description.',
      screenshot: req.body.screenshot !== '' ? req.body.screenshot : 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' ,
      folderId: req.params.folderId,
      userId: req.user.id
    };

    bookmarkQueries.addBookmark(newBookmark, (err, bookmark) => {
      if (err) {
        console.log(err);
        res.status(404).json({err});
      } else {
        console.log(bookmark);
        res.status(201).json({ bookmark });
      }
    });
  },

  showBookmark(req, res, next) {
    bookmarkQueries.getBookmark(req.params.id, (err, bookmark) => {
      if (err || bookmark == null) {
        console.log(err);
        res.status(404).json({err});
      } else {
        console.log(bookmark);
        res.status(200).json({ bookmark });
      }
    })
  },

  getAll(req, res, next) {
    bookmarkQueries.findAllBookmarks(req.params.userId, (err, bookmarks) => {
      if (err || bookmarks == null) {
        console.log(err);
        res.status(404).json({err});
      } else {
        console.log(bookmarks);
        res.status(200).json({ bookmarks });
      }
    })
  }
}
