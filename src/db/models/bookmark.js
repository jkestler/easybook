'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bookmark = sequelize.define('Bookmark', {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'This bookmark has no description.'
    },
    screenshot: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  
  Bookmark.associate = function(models) {
    Bookmark.belongsToMany(models.Tag, {
      through: 'TagBookmarks',
      as: 'tags',
      foreignKey: 'bookmarkId'
    });

    Bookmark.belongsTo(models.Folder, {
      foreignKey: 'folderId',
      onDelete: 'CASCADE'
    });

    Bookmark.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };

  return Bookmark;
};