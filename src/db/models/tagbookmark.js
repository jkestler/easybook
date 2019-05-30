'use strict';
module.exports = (sequelize, DataTypes) => {
  var TagBookmarks = sequelize.define('TagBookmark', {
    bookmarkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  
  return TagBookmark;
};