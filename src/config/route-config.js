module.exports = {

  init(app) {
    
    // const staticRoutes = require('../routes/static');
    const bookmarkRoutes = require('../routes/bookmarks');
    const userRoutes = require('../routes/users');
    const folderRoutes = require('../routes/folders');
    const staticRoutes = require('../routes/static');
    if(process.env.NODE_ENV === "test") {
      const mockAuth = require("../../spec/support/mock-auth.js");
      mockAuth.fakeIt(app);
    }

    app.use(staticRoutes);
    app.use(bookmarkRoutes);
    app.use(userRoutes);
    app.use(folderRoutes);

  }

}