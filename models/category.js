
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
      category_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    category_name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        } 
    },
    category_summary: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        } 
    }
    
  });

  /*/post and category association
  Category.associate = function(models) {
    models.Category.belongsToMany(models.Post,{ 
      as: 'posts', 
      through: 'PostCategory',
      foreignKey: 'category_id'
    });
  };*/

  return Category;
};