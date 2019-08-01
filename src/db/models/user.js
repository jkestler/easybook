'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'must be a valid email'
        }
      }
   },
  //  username: {
  //    unique: true,
  //    type: DataTypes.STRING,
  //    allowNull: false,
  //  },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   }
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Folder, {
      foreignKey: 'userId',
      as: 'folders'
    });
  };

  return User;
};