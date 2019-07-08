const User = require('./models').User;
const bcrypt = require('bcryptjs');

module.exports = {

  createUser(newUser, callback) {


    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

     User.create({
      username: newUser.username,
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => {
      this.user = user;
      console.log(user);  // ! Program is getting to here
      callback(null, user);
    })
    .catch((err) => {
      callback(err); 
      // console.log('ERROR', err);
    })
  }

}