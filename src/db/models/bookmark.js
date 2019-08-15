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
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'This bookmark has no description.'
    },
    screenshot: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image'
    },
    folderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {});
  
  Bookmark.associate = function(models) {
    
    Bookmark.hasMany(models.Tag, {
      foreignKey: 'bookmarkId',
      as: 'tags'
    });
    
    Bookmark.belongsTo(models.Folder, {
      foreignKey: 'folderId',
      onDelete: 'CASCADE'
    });

    Bookmark.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    
    // Bookmark.belongsToMany(models.Tag, {
    //   through: models.TagBookmark,
    //   as: 'tags',
    //   foreignKey: 'bookmarkId'
    // });
  };

  return Bookmark;
};