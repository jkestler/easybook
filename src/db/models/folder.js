'use strict';
module.exports = (sequelize, DataTypes) => {
  var Folder = sequelize.define('Folder', {
    folderName: {
      allowNull: false,
      defaultValue: 'Other',
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  Folder.associate = function(models) {
    Folder.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Folder.hasMany(models.Bookmark, {
      foreignKey: 'folderId',
      as: 'bookmarks'
    });
    
  };
  return Folder;
};