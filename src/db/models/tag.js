'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    tagName: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});

  Tag.associate = function(models) {
    Tag.belongsToMany(models.Bookmark, {
      through: models.TagBookmark,
      as: 'bookmarks',
      foreignKey: 'tagId'
    })
  };

  return Tag;
};

// Tag.belongsTo(models.Bookmark, {
//   foreignKey: "bookmarkId",
//   onDelete: "CASCADE"
// });

// bookmarkId: {
//   type: DataTypes.INTEGER,
//   onDelete: "CASCADE",
//   references: {
//     model: "Bookmarks",
//     key: "id",
//     as: "bookmarkId"
//   }
// }