var Post = require('../models/post');
var models = require('../models');

// This is the blog homepage.
exports.index = function(req, res) {

      // find the count of posts in database
      models.Post.findAndCountAll(
      ).then(function(postCount) {
          models.Employee.findAndCountAll(
      ).then(function(employeeCount) {
        res.render('pages/index', {title: 'Homepage', postCount: postCount, employeeCount: employeeCount, layout: 'layouts/main'});
      });
      });
      
    
    };