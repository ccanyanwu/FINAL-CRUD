var Comment = require('../models/comment');
var models = require('../models');

// Display author create form on GET.
exports.comment_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/comment_form', { title: 'Create Comment',  layout: 'layouts/detail'});
        console.log(232);
};

// Handle user create on POST.
exports.comment_create_post = function(req, res, next) {
     
      models.Comment.create({
            comment_body: req.body.comment_body,
            post_id: req.body.post_id
        }).then(function() {
            console.log("Comment created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/comments'); 
      });
     
};

// Display user delete form on GET.
exports.user_delete_get = function(req, res, next) {
        // GET logic to delete an user here
        models.User.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.user_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            //res.redirect('/blog/users');
            console.log("User deleted successfully");
          });
        // renders user delete page
        res.render('pages/user_delete', { title: 'Delete User',  layout: 'layouts/detail'} );
};

// Handle user delete on POST.
exports.comment_delete_get = function(req, res, next) {
        
        models.Comment.destroy({
            // find the user_id to delete from database
            where: {
              comment_id: req.params.comment_id
            }
          }).then(function() {
          
            res.redirect('/blog/comments');
            console.log("Comments deleted successfully");
          });
        
};

// Display user update form on GET.
exports.comment_update_get = function(req, res, next) {
        console.log("ID is " + req.params.comment_id);
        models.Comment.findById(
                req.params.comment_id
        ).then(function(comment) {
               // renders a post form
               res.render('forms/comment_form', { title: 'Update Comment', comment: comment, layout: 'layouts/detail'});
               console.log("Comment update get successful");
          });
};

// Handle post update on POST.
exports.comment_update_post = function(req, res, next) {
        // POST logic to update an user here
        console.log("ID is " + req.params.comment_id);
        models.Comment.update(
        // Values to update
            {
                comment_body: req.body.comment_body
            },
          { // Clause
                where: 
                {
                    comment_id: req.params.comment_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(function() { 
        
                res.redirect("/blog/comments");  
                console.log("Comment updated successfully");
          });
};

// Display list of all users.
exports.comment_list = function(req, res, next) {
        // GET controller logic to list all users
        models.Comment.findAll(
        ).then(function(comments) {
        // renders a post list page
        console.log("rendering comment list");
        res.render('pages/comment_list', { title: 'Comment List', comments: comments, layout: 'layouts/list'} );
        console.log("Comment list renders successfully");
        });
};

// Display detail page for a specific user.
exports.comment_detail = function(req, res, next) {
         console.log(req.params.comment_id);
        models.Comment.findById(
                req.params.comment_id
        ).then(function(comment) {
        // renders an inividual post details page
        
        res.render('pages/comment_detail', { title: 'Comment Details', comment: comment, layout: 'layouts/detail'} );
        console.log(comment.name);
        //console.log("User details renders successfully");
        });
};

 