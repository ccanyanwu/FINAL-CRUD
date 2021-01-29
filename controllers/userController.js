var User = require('../models/user');
var models = require('../models');

// Display author create form on GET.
exports.user_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/user_form', { title: 'Create User',  layout: 'layouts/detail'});
        console.log(232);
};

// Handle user create on POST.
exports.user_create_post = function(req, res, next) {
     // create user POST controller logic here
     // If an user gets created successfully, we just redirect to users list
     // no need to render a page
      models.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            console.log("User created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/users');  //COME BACK HERE LATER
      });
     //res.redirect("/users");
     //res.redirect("/blog/users");
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
exports.user_delete_get = function(req, res, next) {
        
        models.User.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.user_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/users');
            console.log("User deleted successfully");
          });
        
};

// Display user update form on GET.
exports.user_update_get = function(req, res, next) {
        console.log("ID is " + req.params.user_id);
        models.User.findById(
                req.params.user_id
        ).then(function(user) {
               // renders a post form
               res.render('forms/user_form', { title: 'Update User', user: user, layout: 'layouts/detail'});
               console.log("    User update get successful");
          });
};

// Handle post update on POST.
exports.user_update_post = function(req, res, next) {
        // POST logic to update an user here
        console.log("ID is " + req.params.user_id);
        models.User.update(
        // Values to update
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            },
          { // Clause
                where: 
                {
                    id: req.params.user_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(function() { 
                // If an post gets updated successfully, we just redirect to posts list
                // no need to render a page
                res.redirect("/blog/users");  
                console.log("User updated successfully");
          });
};

// Display list of all users.
exports.user_list = function(req, res, next) {
        // GET controller logic to list all users
        models.User.findAll(
        ).then(function(users) {
        // renders a post list page
        console.log("rendering user list");
        res.render('pages/user_list', { title: 'User List', users: users, layout: 'layouts/list'} );
        console.log("User list renders successfully");
        });
        // renders all users list
        //res.render('pages/user_list', { title: 'User List',  layout: 'layouts/list'} );
};

// Display detail page for a specific user.
exports.user_detail = function(req, res, next) {
         console.log(req.params.user_id);
        models.User.findById(
                req.params.user_id
        ).then(function(user) {
        // renders an inividual post details page
        
        res.render('pages/user_detail', { title: 'User Details', user: user, layout: 'layouts/detail'} );
        console.log(user.first_name);
        //console.log("User details renders successfully");
        });
};

 