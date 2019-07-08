const User = require('./models').User;
const bcrypt = require('bcryptjs');

module.exports = {

  createUser(newUser, callback) {

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

    // console.log(salt);
    // console.log(newUser);
    return User.create({
      username: newUser.username,
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => {
      console.log(user);
      callback(null, user)
    })
    .catch((err) => {
      callback(err);
      // console.log('ERROR', err);
    })
  }

}