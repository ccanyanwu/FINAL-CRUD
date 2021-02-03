var express = require('express');
var router = express.Router();


// Require our controllers.
var employee_controller = require('../controllers/employeeController');
var post_controller = require('../controllers/postController');

/// EMPLOYEE ROUTES ///

// POST request for creating employee.
router.post('/employee/create', employee_controller.employee_create_post);

// POST request to delete employee.
 router.post('/employee/:employee_id/delete', employee_controller.employee_delete_post);

 // POST request to update employee.
 router.post('/employee/:employee_id/update', employee_controller.employee_update_post);

 // GET request for one employee.
 router.get('/employee/:employee_id', employee_controller.employee_detail);

 // GET request for list of all employees.
router.get('/employees', employee_controller.employee_list);

// GET blog home page.
router.get('/', post_controller.index); 

// export all the router created
module.exports = router;
