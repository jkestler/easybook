const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5001/folders/";
const User = require('../../src/db/models').User;
const Folder = require('../../src/db/models').Folder;
const Bookmark = require('../../src/db/models').Bookmark;

const sequelize = require("../../src/db/models/index").sequelize;

describe('routes : folders', () => {
  beforeEach((done) => {
    this.folder;
    this.user;
    this.bookmark;
    
    sequelize.sync({ force: true}).then((res) => {
      User.create({
        email: 'jkest90@gmail.com',
        password: 'password'
      })
      .then((user ) => {
        this.user = user;
        Folder.create({
          folderName: 'Interviews',
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
            this.bookmark = bookmark;
            done();
          });
        });
      });
    });
  })

  describe('user performing CRUD actions for folder', () => {

    // beforeEach((done) => {
    //   User.create({
    //     email: 'jkest618@gmail.com',
    //     password: 'password'
    //   })
    //   .then((user) => {
    //     request.get({
    //       url: 'http://localhost:5001/auth/fake',
    //       form: {
    //         email: user.email,
    //         userId: user.id
    //       }
    //     }, (err, res, body) => {
    //         done();
    //       }
    //     ) 
    //   });
    // });

    describe('POST /folders/create', () => {

      it('should create a new folder', (done) => {
        const options = {
          method: 'POST',
          url: `${base}create`,
          body: { folderName: 'Interview Stuff', userId: this.user.id },
          json: true
        };

        request.post(options, (err, res, body) => {
          console.log(options);
          Folder.findOne({ where: { folderName: 'Interview Stuff'} })
          .then((folder) => {
            this.folder = folder;
            console.log(folder);
            expect(folder.folderName).toBe('Interview Stuff');
            expect(folder.userId).toBe(1);
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        });
      });

    });

  });

  describe('POST /folders/:id', () => {

    it('should return associated post', (done) => {
      request.get(`${base}${this.folder.id}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain('Interviews');
        done();
      })
    })

  });

});