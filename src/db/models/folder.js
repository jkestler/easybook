'use strict';
module.exports = (sequelize, DataTypes) => {
  var Folder = sequelize.define('Folder', {
    folderName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  Folder.associate = function(models) {
    Folder.hasMany(models.Bookmark, {
      foreignKey: 'folderId',
      as: 'bookmarks'
    });
    
    Folder.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    
  };
  return Folder;
};