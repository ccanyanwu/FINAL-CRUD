var Post = require('../models/post');
var models = require('../models');

// This is the blog homepage.
exports.index = function(req, res) {

      // find the count of posts in database
      models.Post.findAndCountAll(
      ).then(function(postCount) {
          models.Author.findAndCountAll(
      ).then(function(authorCount) {
        res.render('pages/index', {title: 'Homepage', postCount: postCount, authorCount: authorCount, layout: 'layouts/main'});
      });
      });
      
    
    };