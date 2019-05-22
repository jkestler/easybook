'use strict';
module.exports = (sequelize, DataTypes) => {
  var TagBookmarks = sequelize.define('TagBookmarks', {
    bookmarkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bookmarks',
        key: 'id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tags',
        key: 'id'
      }
    }
  }, {});
  
  return TagBookmarks;
};