const User = require('./models').User;
const bcrypt = require('bcryptjs');
const Folder = require('./models').Folder;
const Bookmark = require('./models').Bookmark;

module.exports = {

  createUser(newUser, callback) {

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

    return User.create({
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => { 
      console.log(user);  // ! Program is getting to here
      callback(null, user);
    })
    .catch((err) => {
      callback(err); 
      // console.log('ERROR', err);
    })  
  },
  
  // get user and return all user's folders
  // getFolder returns all bookmarks for each folder
  getUser(id, callback) {
    let result = {};
    return User.findByPk(id, {
      include: [
        {
          model: Folder,
          as: 'folders',
          required: false,
          where: { userId: id },
          include: [{
            model: Bookmark,
            as: 'bookmarks',
            required: false
          }]  
        }
      ]
    })
    .then((user) => {
      result['user'] = user;
      console.log('USER DATA', user)
      console.log(result);
      callback(null, result)  
    }) 
  }
}
 