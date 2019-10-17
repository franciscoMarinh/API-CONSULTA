'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('usersTasks', [
        {
          taskId: 1,
          userId: 2
        },
        {
          taskId: 2,
          userId: 1
        },
        {
          taskId: 2,
          userId: 1
        },
      ], 
    {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usersTasks', null, {});
 
  }
};
