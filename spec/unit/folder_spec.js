const request = require('request');
const server = require('../../src/server');
const sequelize = require('../../src/db/models/index').sequelize;
const User = require('../../src/db/models').User; 
const Folder = require('../../src/db/models').Folder; 


describe('Folder', () => {

    beforeEach((done) => {
      
      this.user;
      sequelize.sync({force: true}).then((res) => {
        User.create({
          email: 'jkest90@gmail.com',
          password: 'password123', 
        })
        .then((user) => {
          this.user = user;
          done();
        });
      });

    }); // end beforeEach

    describe('#create()', () => {

      it('should create a folder with an attached userId', (done) => {
        Folder.create({
          folderName: 'Documentation',
          userId: this.user.id
        })
        .then((folder) => {
          expect(folder.folderName).toBe('Documentation');
          expect(folder.userId).toBe(this.user.id);
          done();
        }) 
        .catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should not create a folder with a missing userId', (done) => {
        Folder.create({
          folderName: 'Documentation',
        })
        .then((folder) => {
          expect(folder).toBeNull();
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });

    }); // end #create

  


});
