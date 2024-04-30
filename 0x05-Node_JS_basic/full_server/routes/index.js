const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route: GET '/'
// Description: Renders the homepage of the application
router.get('/', AppController.getHomepage);

// Route: GET '/students'
// Description: Retrieves all students from the database and renders a page displaying them
router.get('/students', StudentsController.getAllStudents);

// Route: GET '/students/:major'
// Description: Retrieves students filtered by a specific major from the database
//              and renders a page displaying them
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
