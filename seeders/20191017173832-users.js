'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [
        {
          name: 'Francisco Do bar',
          email: "franc1sc1566@gmail.com",
          teamId: 2
        },
        {
          name: 'wartelon malthus',
          email: "wartelon@gmail.com",
          teamId: 2,
        },
        {
          name: 'alexsandro castro',
          email: "alexsandro.castro@gmail.com",
          teamId: 2,
        },
        {
          name: 'Leandro honda',
          email: "Leandrão@gmail.com",
          teamId: 1
        },
        {
          name: 'Paulão america',
          email: "Paulão-america@gmail.com",
          teamId: 1
        },
        {
          name: 'Emanuel',
          email: "Emanuel@Gambiarra.com",
          teamId: 1
        },
      ], 
      {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
 
  }
};
