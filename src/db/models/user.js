'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "must be a valid email"
        }
      }
   },
   username: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   }
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Bookmark, {
      foreignKey: 'userId',
      as: 'bookmarks'
    });

    User.hasMany(models.Folders, {
      foreignKey: 'userId',
      as: 'folders'
    });
  };

  return User;
};