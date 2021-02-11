var Comment = require('../models/comment');
var models = require('../models');
var moment = require('moment');

// Display author create form on GET.
exports.comment_create_get = async function(req, res, next) {
        //render a comment form 
        res.render('forms/comment_form', { title: 'Create Comment',  layout: 'layouts/detail'});
        
};

// Handle user create on POST.
exports.comment_create_post = async function(req, res, next) {
        // create comment POST controller logic here
     let post_id = req.body.post_id
     models.Comment.create({
            comment_body: req.body.comment_body,
            PostId: req.body.post_id
        }).then(function() {
            console.log("Comment created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/post/' + post_id);
      });
        
     
};

// Display comment delete form on GET.
exports.comment_delete_get = function(req, res, next) {
        models.Comment.destroy({
            // find the comment_id to delete from database
            where: {
              id: req.params.comment_id
            }
          }).then(function() {
           // If a comment gets deleted successfully, we just redirect to posts list
           // no need to render a page
            res.redirect('/blog/comments');
            console.log("Comment deleted successfully");
          });};

// Handle user delete on POST.
exports.comment_delete_post = function(req, res, next) {
        
        models.Comment.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.comment_id
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
                    id: req.params.comment_id
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
        
        res.render('pages/comment_detail', { title: 'Comment Details', comment: comment, moment:moment, layout: 'layouts/detail'} );
        //console.log(comment.name);
        //console.log("User details renders successfully");
        });
};

 