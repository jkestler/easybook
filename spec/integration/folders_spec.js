// const request = require("request");
// const server = require("../../src/server");
// const base = "http://localhost:5001/folders";
// const User = require('../../src/db/models').User;
// const Folder = require('../../src/db/models').Folder;

// const sequelize = require("../../src/db/models/index").sequelize;

// describe('routes : folders', () => {
//   beforeEach((done) => {
//     this.folder;
    
//     sequelize.sync({ force: true}).then((res) => {
//       User.create({
//         email: 'jkest90@gmail.com',
//         password: 'password'
//       })
//       .then((user ) => {
//         this.user = user;
//         Folder.create({
//           folderName: 'Interviews',
//           userId: this.user.id
//         })
//         .then((folder) => {
//           this.folder = folder;
//           done();
//         });
//       });
//     });
//   })

//   describe('user performing CRUD actions for folder', () => {

//     beforeEach((done) => {
//       User.create({
//         email: 'Jonathan@gmail.com',
//         password: 'password'
//       })
//       .then((user) => {
//         request.get({
//           url: 'http://localhost:5001/auth/fake',
//           form: {
//             email: user.username,
//             userId: user.id
//           }
//         }, (err, res, body) => {
//             done();
//           }
//         ) 
//       });
//     });

//     describe('GET /folders', () => {
//       it('should respond with all folders', (done) => {
//         request.get(base, (err, res, body) => {
//           expect(err).toBeNull();
//           expect(this.folder).not.toBeNull();
//           done();
//         })
//         .catch((err) => {
//           console.log(err);
//           done();
//         })
//       })
//     })

//   });

// });