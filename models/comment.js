'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    comment_title: DataTypes.STRING,
    comment_body: DataTypes.STRING
  });

  return Comment;
};

// Make sure you complete other models fields