const request = require('request');
const base = 'http://localhost:5001/folders/';

const sequelize = require('../../src/db/models/index').sequelize;
const User = require('../../src/db/models').User;
const Folder = require('../../src/db/models').Folder;
const Bookmark = require('../../src/db/models').Bookmark;


describe('routes : bookmarks', () => {
  this.user;
  this.post;
  this.bookmark;
  beforeEach((done) => {

    sequelize.sync({ force: true}).then((res) => {
      User.create({
        email: 'jkest900@gmail.com',
        password: 'password123'
      })
      .then((user) => {
        this.user = user;
        console.log(user);
        Folder.create({
          folderName: 'Documentation',
          userId: this.user.id,
        })
        .then((folder) => {
          this.folder = folder;
          Bookmark.create({
            url: 'http://testurl.com',
            description: 'this a test',
            title: 'Testing123',
            screenshot: 'http://testscreenshot.com',
            folderId: this.folder.id
          })
        })
        .then((bookmark) => {
          console.log(JSON.stringify(this.folder));
          this.bookmark = bookmark;
          done();
        });
      });
    });
  })

  describe('user performing crud operations on bookmarks', () => {

    it('should create a bookmark', (done) => {
      Folder.create({
        folderName: 'Docs',
        userId: this.user.id
      })
      .then((folder) => {
        this.folder = folder;
        Bookmark.create({
          url: '123@gmail.com',
          description: 'description123',
          title: 'title123',
          screenshot: 'screenshot123',
          folderId: this.folder.id
        })
        .then((bookmark) => {
          console.log(bookmark);
          expect(bookmark.url).toBe('123@gmail.com');
          done();
        })
        // .catch((err) => {
        //   console.log(err);
        //   done();
        // })
      })
    })

    it('should create a bookmark associated with a folder', (done) => {
      const options = {
        url: `${base}${this.folder.id}/bookmark/create`,
        method: 'POST',

        json: true,
        form: {
          url: 'http://localhost/testing',
          description: 'Bookmark description',
          headers: { 'Content-Type': 'application/json' },
          title: 'This is the title',
          screenshot: 'screenshot123url',
          folderId: this.folder.id
        }
      };

      request.post(options, 
        (err, res, body) => {
          Bookmark.findOne({ where: {url: 'http://localhost/testing'}} )
          .then((bookmark) => {
            expect(bookmark).not.toBeNull();
            // expect(bookmark.title).toBe('This is the title');
            expect(bookmark.screenshot).toBe('screenshot123url');
            expect(bookmark.folderId).not.toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });

  });

});