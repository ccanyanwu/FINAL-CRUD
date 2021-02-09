var Category = require('../models/category');
var models = require('../models');

// Display author create form on GET.
exports.category_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/category_form', { title: 'Create Category',  layout: 'layouts/detail'});
        
};

// Handle user create on POST.
exports.category_create_post = function(req, res, next) {
     
      models.Category.create({
            category_name: req.body.category_name,
            category_summary: req.body.category_summary
        }).then(function() {
            console.log("Category created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/categories'); 
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
exports.category_delete_get = function(req, res, next) {
        
        models.Category.destroy({
            // find the user_id to delete from database
            where: {
              category_id: req.params.category_id
            }
          }).then(function() {
          
            res.redirect('/blog/categories');
            console.log("Categories deleted successfully");
          });
        
};

// Display user update form on GET.
exports.category_update_get = function(req, res, next) {
        console.log("ID is " + req.params.category_id);
        models.Category.findById(
                req.params.category_id
        ).then(function(category) {
               // renders a post form
               res.render('forms/category_form', { title: 'Update Category', category: category, layout: 'layouts/detail'});
               console.log("Category update get successful");
          });
};

// Handle post update on POST.
exports.category_update_post = function(req, res, next) {
        // POST logic to update an user here
        console.log("ID is " + req.params.category_id);
        models.Category.update(
        // Values to update
            {
                category_name: req.body.category_name,
                category_summary: req.body.category_summary
            },
          { // Clause
                where: 
                {
                    category_id: req.params.category_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(function() { 
        
                res.redirect("/blog/categories");  
                console.log("Category updated successfully");
          });
};

// Display list of all users.
exports.category_list = function(req, res, next) {
        // GET controller logic to list all users
        models.Category.findAll(
        ).then(function(categories) {
        // renders a post list page
        console.log("rendering categoriy list");
        res.render('pages/category_list', { title: 'Category List', categories: categories, layout: 'layouts/list'} );
        console.log("Category list renders successfully");
        });
};

// Display detail page for a specific user.
exports.category_detail = function(req, res, next) {
         console.log(req.params.category_id);
        models.Category.findById(
                req.params.category_id
        ).then(function(category) {
        // renders an inividual post details page
        
        res.render('pages/category_detail', { title: 'Category Details', category: category, layout: 'layouts/detail'} );
        console.log(category.category_summary);
        //console.log("User details renders successfully");
        });
};

 