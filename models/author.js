const Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
      author_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    first_name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        } 
    },
    last_name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        } 
    },
    username: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        } 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
    }},
    /*password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: ["^[a-z]+$",'i'] 
      }
    }*/password: {
   type: Sequelize.STRING,
   validate: {
      len: { 
         args: [7, 42],
         msg: "The password length should be between 7 and 42 characters."
      }
   },
},
    mobile:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric : true
        }
    }
    
  });

  /*/ create association between author and post
  //* an author can has many posts
  Author.associate = function(models) {
    models.Author.hasMany(models.Post);
  };
*/

  return Author;
};