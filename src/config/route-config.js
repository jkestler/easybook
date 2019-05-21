module.exports = {

  init(app) {
    
    const staticRoutes = require('../routes/static');
    const bookmarkRoutes = require('../routes/bookmarks');

    app.use(staticRoutes);
    app.use(bookmarkRoutes);

  }

}