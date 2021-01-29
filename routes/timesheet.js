var express = require('express');
var router = express.Router();


// Require our controllers.
var timesheet_controller = require('../controllers/timesheetController');

/// TIMESHEET ROUTES ///

// GET TIMESHEET home page.
router.get('/', timesheet_controller.index); 

// GET request for creating a Timesheet. NOTE This must come before routes that display Timesheet (uses id).
router.get('timesheet/create', timesheet_controller.timesheet_create_get);

// POST request for creating Timesheet.
router.post('/create', timesheet_controller.timesheet_create_post);

// GET request for one Timesheet.
router.get('/:id', timesheet_controller.timesheet_detail);

// GET request for list of all Timesheet.
router.get('/timesheets', timesheet_controller.timesheet_list);

// GET request to update Timesheet.
router.get('/:id/update', timesheet_controller.timesheet_update_get);

// POST request to update Timesheet.
router.post('/:id/update', timesheet_controller.timesheet_update_post);

// GET request to delete Timesheet.
router.get('/:id/delete', timesheet_controller.timesheet_delete_get);

// POST request to delete Timesheet.
router.post('/:id/delete', timesheet_controller.timesheet_delete_post);

// export all the router created
module.exports = router;
