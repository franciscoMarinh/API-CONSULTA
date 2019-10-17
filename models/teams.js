'use strict';
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    name: DataTypes.STRING
  }, {});
  teams.associate = (models) => {
    teams.hasMany(models.users,{
      foreignKey: "teamId",
      targetKey: "id",
    })
  };
  return teams;
};