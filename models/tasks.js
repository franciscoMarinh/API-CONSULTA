'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define('tasks', {
    title: DataTypes.STRING
  }, {});
  tasks.associate = function(models) {
    tasks.belongsToMany(models.users,{
      through: "userstasks",
      foreignKey: "taskId",
     
    })
  };
  return tasks;
};