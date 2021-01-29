'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    descrition: DataTypes.STRING
  });

  return Category;
};

// Make sure you complete other models fields