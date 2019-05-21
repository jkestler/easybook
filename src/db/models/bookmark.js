'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bookmark = sequelize.define('Bookmark', {
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    screenshot: DataTypes.STRING
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here
  };
  return Bookmark;
};