
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
      comment_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    comment_body: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        } 
    },
    post_id : {
        type: DataTypes.INTEGER
      }
    
  });

  /*/ create comment  association
  // a comment will belong to only 1 post
  // a field called post_id will be created in our comment table inside the db
  Comment.associate = function (models) {
    
    models.Comment.belongsTo(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    
   };*/

  return Comment;
};

// Make sure you complete other models fields