'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('tasks', [
        {
          title: 'Jogar o lixo fora'
        },
        {
          title: 'Ir a aula Hoje'
        },
        {
          title: 'Dormir muito Hoje'
        },
      ], 
    {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tasks', null, {});
 
  }
};
