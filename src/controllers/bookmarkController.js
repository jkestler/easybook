const bookmarkQueries = require('../db/queries.bookmarks.js');

module.exports = {

  create(req, res, next) {
    let newBookmark = {
      url: req.body.url,
      title: req.body.title,
      description: req.body.description,
      screenshot: req.body.screeshot,
      folderId: req.params.folderId
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
  }
}
