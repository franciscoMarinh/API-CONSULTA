'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      teamId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "teams",
          key: 'id',
        },
        onDelete: "cascade"
      },
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('users');
  }
};