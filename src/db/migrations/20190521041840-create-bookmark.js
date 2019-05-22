'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookmarks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        defaultValue: "This bookmark has no description.",
        type: Sequelize.STRING
      },
      screenshot: {
        allowNull: false,
        defaultValue: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      folderId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Folders",
          key: "id",
          as: "folderId"
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
           model: 'Users',
           key: 'id',
           as: 'userId'
        },
     }
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookmarks');
  }
};