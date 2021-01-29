'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
      },
    email: {
        type: DataTypes.STRING,
      },
    password: {
        type: DataTypes.STRING,
      },


  });

  /*User.associate = function(models) {
    models.User.hasMany(models.Task);
  };*/

  return User;
};
