const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5001/user/";
const User = require("../../src/db/models").User;
const Folder = require('../../src/db/models').Folder;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : users", () => {

  beforeEach((done) => {
    sequelize.sync({
        force: true
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });


  describe("POST /user", () => {

    it("should create a new user with valid values and respond with JSON", (done) => {
      const options = {
        url: base,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          email: 'jkest62001@gmail.com',
          password: '123456789',
          passwordConfirmation: '123456789'
        },
        json: true
      }

      request.post(options,
        (err, res, body) => {
          User.findOne({
              where: {
                email: 'jkest62001@gmail.com'
              }
            })
            .then((user) => {
              this.user = user;
              expect(user).not.toBeNull();
              expect(user.email).toBe("jkest62001@gmail.com");
              expect(user.id).toBe(1);
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
        });
    });
  });

  describe("GET /user/signout/", () => {

    it("should sign out a user", (done) => {
      const options = {
        url: base + 'signout',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          email: 'lucy225@gmail.com',
          password: '123456789',
          passwordConfirmation: '123456789'
        },
        json: true
      }

      request.post(options, (err, res, body) => {
        User.findOne({
            where: {
              email: 'lucy225@gmail.com'
            }
          })
          .then((user) => {
            this.user = user;
            request.get(`${base}signout`, (err, res, body) => {
              expect(user).toBeNull();
              done();
            })
          }
        );
      });
    });
  });
  
  describe('GET /user/:id', () => {
    beforeEach((done) => {
      this.user;
      this.folder;

      User.create({
        email: 'jkest618@gmail.com',
        password: 'jonathank'
      })
      .then((user) => {
        this.user = user;
        Folder.create({
          folderName: 'Discussions',
          userId: this.user.id
        })
        .then((folder) => {
          this.folder = folder;
          done();
        });
      });
    });

    it('should present a folder associated with this user', (done) => {
      request.get(`${base}${this.user.id}`, (err, res, body) => {
        expect(body).toContain('Discussions');
        done();
      });
    });

  });
});
