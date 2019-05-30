'use strict';
module.exports = (sequelize, DataTypes) => {
  var TagBookmark = sequelize.define('TagBookmark', {
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