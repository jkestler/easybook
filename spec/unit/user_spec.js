const sequelize = require('../../src/db/models/index').sequelize;
const User = require('../../src/db/models').User;
// const request = require("request");

describe('User', () => {

  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    })
  })

  describe('#create()', () => {

    it('should create a User object with a valid username, email, & password', (done) => {
      User.create({
        username: 'Jkest90',
        email: 'jkest90@gmail.com', 
        password: '1234567890'
      })
      .then((user) => {
        expect(user.id).toBe(1);
        expect(user.username).toBe('Jkest90');
        expect(user.email).toBe('jkest90@gmail.com');
        expect(user.password).toBe('1234567890');
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

  it('should not create a User without an invalid e-mail or password', (done) => {
    User.create({
      username: 'Jkest90',
      email: 'jkest90',
    })
    .then((user) => {
      done();
    })
    .catch((err) => {
      expect(err.message).toContain('Validation error: must be a valid email');
      // console.log(err);
      done();
    });
  });

  it("should not create a user with an email already taken", (done) => {
    User.create({
      username: 'jkest90',
      email: 'user@example.com',
      password: '1234567890'
    })
    .then((user) => {
      User.create({
        username: 'jkest90',
        email: 'user@example.com',
        password: '12345678902'
      })
      .then((user) => {
        done();
      })
      .catch((err) => {
        console.log(err.message);
        expect(err.message).toContain("Validation error");
        done();
      });
    });
  });
});