const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const port = 1245;
const databasePath = process.argv[2]; // Get the database file path from command line arguments

// Middleware to set content type to plain text
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

// Route for the root path ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  try {
    // Retrieve the student data from the database
    const studentsData = await countStudents(databasePath);
    // Send the student data as plain text response
    res.send(studentsData);
  } catch (error) {
    // Send error message if database cannot be loaded
    res.status(500).send('Cannot load the database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the Express app instance
