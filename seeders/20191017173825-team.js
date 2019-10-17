'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('teams', [
        {
          name: 'Ty-recicla'
        },
        {
          name: 'TManager'
        },
      ], 
    {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('teams', null, {});
 
  }
};
