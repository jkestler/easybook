module.exports = {

  init(app) {
    
    const staticRoutes = require('../routes/static');
    const bookmarkRoutes = require('../routes/bookmarks');
    const userRoutes = require('../routes/users');

    app.use(staticRoutes);
    app.use(bookmarkRoutes);
    app.use(userRoutes);

  }

}