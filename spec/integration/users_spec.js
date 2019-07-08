const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5001/user/";
const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : users", () => {

  beforeEach((done) => {
    sequelize.sync({ force: true })
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });


  describe("POST /users", () => {
      
    it("should create a new user with valid values and respond with JSON", (done) => {
      const options = {
        url: base,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          email: 'jkest6000@gmail.com',
          password: '123456789',
          passwordConfirmation: '123456789'
        },
        json: true
      }
  
      request.post(options,
        (err, res, body) => {
          User.findOne({where: {email: 'jkest6000@gmail.com' }})
            .then((user) => {
              this.user = user;
              expect(user).not.toBeNull();
              expect(user.email).toBe("jkest6000@gmail.com");
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
  });
      
      
                // it("should not create a new user with invalid attributes and redirect", (done) => {
                //   request.post(
                //     {
                //       url: base,
                //       form: {
                //         email: "no",
                //         password: "123456789"
                //       }
                //     },
                //     (err, res, body) => {
                //       User.findOne({where: {email: "no"}})
                //       .then((user) => {
                //         expect(user).toBeNull();
                //         done();
                //       })
                //       .catch((err) => {
                //         console.log(err);
                //         done();
                //       });
                //     }
                //   );
                // });
      