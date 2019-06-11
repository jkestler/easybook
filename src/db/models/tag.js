'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    tagName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    bookmarkId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});

  Tag.associate = function(models) {
    Tag.belongsTo(models.Bookmark, {
      foreignKey: "bookmarkId",
      onDelete: "CASCADE"
    });
  };
  return Tag;
};

// Tag.belongsToMany(models.Bookmark, {
//   through: models.TagBookmark,
//   as: 'bookmarks',
//   foreignKey: 'tagId'
// })

// bookmarkId: {
//   type: DataTypes.INTEGER,
//   onDelete: "CASCADE",
//   references: {
//     model: "Bookmarks",
//     key: "id",
//     as: "bookmarkId"
//   }
// }