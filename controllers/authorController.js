var Author = require('../models/author');
var models = require('../models');
var moment = require('moment');

// Display author create form on GET.
exports.author_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/author_form', { title: 'Create Author',  layout: 'layouts/detail'});
};

// Handle authorr create on POST.
exports.author_create_post = function(req, res, next) {
     // create authorr POST controller logic here
     
      models.Author.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile
        }).then(function() {
            console.log("Author created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/authors'); 
      });
};

// Display author delete form on GET.
exports.author_delete_get = function(req, res, next) {
        
        models.Author.destroy({
            // find the author_id to delete from database
            where: {
              id: req.params.author_id
            }
          }).then(function() {
           // If a author gets deleted successfully, we just redirect to authors list
           // no need to render a page
            res.redirect('/blog/authors');
            console.log("Author deleted successfully");
          });
        
};

// Handle author delete on POST.
exports.author_delete_post = function(req, res, next) {
        
        models.Author.destroy({
            // find the author_id to delete from database
            where: {
              id: req.params.author_id
            }
          }).then(function() {
           // If a author gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/authors');
            console.log("Author deleted successfully");
          });
        
};

// Display user update form on GET.
exports.author_update_get = function(req, res, next) {
        console.log("ID is " + req.params.author_id);
        models.Author.findById(
                req.params.author_id
        ).then(function(author) {
               // renders a post form
               res.render('forms/author_form', { title: 'Update Author', author: author, layout: 'layouts/detail'});
               console.log("Author update get successful");
          });
};

// Handle post update on POST.
exports.author_update_post = function(req, res, next) {
        // POST logic to update an user here
        console.log("ID is " + req.params.author_id);
        models.Author.update(
        // Values to update
            {
                username: req.body.username,
                email: req.body.email,
                mobile: req.body.mobile
            },
          { // Clause
                where: 
                {
                    id: req.params.author_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(function() { 
                // If an post gets updated successfully, we just redirect to posts list
                // no need to render a page
                res.redirect("/blog/authors");  
                console.log("Author updated successfully");
          });
};

// Display list of all authors.
exports.author_list = function(req, res, next) {
        // GET controller logic to list all authors
        models.Author.findAll(
        ).then(function(authors) {
        // renders a post list page
        console.log("rendering author list");
        res.render('pages/author_list', { title: 'Author List', authors: authors, layout: 'layouts/list'} );
        console.log("Author list renders successfully");
        });
};

// Display detail page for a specific user.
exports.author_detail = async function(req, res, next) {
        const categories = await models.Category.findAll();
        models.Author.findById(
                req.params.author_id, {
                include: [
                  {
                    model: models.Post
                  }
                        ]
                }
        ).then(function(author) {
        // renders an inividual author details page
        
        res.render('pages/author_detail', { title: 'Author Details', categories: categories, author: author, moment: moment, layout: 'layouts/detail'} );
        console.log("Author details renders successfully");
        });
};


 