var Timesheet = require('../models/timesheet');

// Display timesheet create form on GET.
exports.timesheet_create_get = function(req, res, next) {
        // create timesheet GET controller logic here 
        res.render('forms/timesheet_form', { title: 'Create timesheet',  layout: 'layouts/detail'});
};

// Handle timesheet create on POST.
exports.timesheet_create_post = function(req, res, next) {
     // create timesheet POST controller logic here
     // If an timesheet gets created successfully, we just redirect to timesheets list
     // no need to render a page
     res.redirect("/timesheets");
};

// Display timesheet delete form on GET.
exports.timesheet_delete_get = function(req, res, next) {
        // GET logic to delete an timesheet here
        
        // renders timesheet delete page
        res.render('pages/timesheet_delete', { title: 'Delete timesheet',  layout: 'layouts/detail'} );
};

// Handle timesheet delete on POST.
exports.timesheet_delete_post = function(req, res, next) {
        // POST logic to delete an timesheet here
        // If an timesheet gets deleted successfully, we just redirect to timesheets list
        // no need to render a page
        res.redirect('/timesheets');
};

// Display timesheet update form on GET.
exports.timesheet_update_get = function(req, res, next) {
        // GET logic to update an timesheet here
        
        // renders timesheet form
        res.render('forms/timesheet_form', { title: 'Update timesheet',  layout: 'layouts/detail'});
};

// Handle post update on POST.
exports.timesheet_update_post = function(req, res, next) {
        // POST logic to update an timesheet here
        // If an timesheet gets updated successfully, we just redirect to timesheets list
        // no need to render a page
        res.redirect("/timesheets");
};

// Display list of all timesheets.
exports.timesheet_list = function(req, res, next) {
        // GET controller logic to list all timesheets
        
        // renders all timesheets list
        res.render('pages/timesheet_list', { title: 'timesheet List',  layout: 'layouts/list'} );
};

// Display detail page for a specific timesheet.
exports.timesheet_detail = function(req, res, next) {
        // GET controller logic to display just one timesheet
        
        // renders an individual timesheet details page
        res.render('pages/timesheet_detail', { title: 'timesheet Details',  layout: 'layouts/detail'} );
};

//timesheet homepage
exports.index = function(req, res) {

             res.render('pages/timesheet_index', {title: 'Timesheet Homepage', layout: 'layouts/main'});
    };