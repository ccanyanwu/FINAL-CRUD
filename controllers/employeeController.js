var Employee = require('../models/employee');
var models = require('../models');

exports.employee_create_post = function(req, res, next) {
     // create employee POST controller logic here
     
      models.Employee.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            role: req.body.role,
            email: req.body.email
        }).then(function() {
            console.log("Employee created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/employees');  
      });
};

// Handle employee delete on POST.
exports.employee_delete_post = function(req, res, next) {
        
        models.Employee.destroy({
            // find the employee_id to delete from database
            where: {
              id: req.params.employee_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/employees');
            console.log("Employee deleted successfully");
          });
        
};

// Handle employee update on POST.
exports.employee_update_post = function(req, res, next) {
        // POST logic to update an employee here
        console.log("ID is " + req.params.employee_id);
        models.Employee.update(
        // Values to update
            {
                username: req.body.username,
                email: req.body.email,
                role: req.body.role
            },
          { // Clause
                where: 
                {
                    id: req.params.employee_id
                }
            } 
         ).then(function() { 
                // If an employee gets updated successfully, we just redirect to employees list
                // no need to render a page
                res.redirect("/blog/employees");  
                console.log("Employee updated successfully");
          });
};

// Display list of all employees.
exports.employee_list = function(req, res, next) {
        // GET controller logic to list all employees
        models.Employee.findAll(
        ).then(function(employees) {
        // renders a employee list page
        console.log("rendering employee list");
        res.render('pages/employee_list', { title: 'Employee List', employees: employees, layout: 'layouts/list'} );
        console.log("Employee list renders successfully");
        });
};

// Display detail page for a specific employee.
exports.employee_detail = function(req, res, next) {
         console.log(req.params.employee_id);
        models.Employee.findById(
                req.params.employee_id
        ).then(function(employee) {
        // renders an inividual employee details page
        res.render('pages/employee_detail', { title: 'Employee Details', employee: employee, layout: 'layouts/detail'} );
        console.log(employee.first_name);
        });
};

 