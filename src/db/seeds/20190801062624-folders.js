"use strict";

//#1
const faker = require("faker");

//#2
let folders = [];

for(let i = 1 ; i <= 15 ; i++){
  folders.push({
    folderName: faker.hacker.phrase(),
    userId: null,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

//#3
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert("Person", [{
        name: "John Doe",
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Folders", folders, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete("Person", null, {});
    */
    return queryInterface.bulkDelete("Folders", null, {});
  }
};