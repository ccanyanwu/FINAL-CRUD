'use strict';
module.exports = (sequelize, DataTypes) => {
  var Timesheet = sequelize.define('Timesheet', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  });
  return Timesheet;
};

// Make sure you complete other models fields