'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  users.associate = (models) => {
    users.belongsTo(models.teams,{
      foreignKey: "id",
      sourcerKey: "teamId",

    })
    users.belongsToMany(models.tasks,{
      through: "userstasks",
      foreignKey: "userId"

    })
  };
  return users;
};