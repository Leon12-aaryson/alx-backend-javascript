const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const fields = {};
        let length = 0;

        const lines = data.trim().split('\n');
        for (const line of lines) {
          const fields = line.split(',');
          if (fields.length === 4) {
            const [firstName, lastName, age, field] = fields;
            if (!students[field]) students[field] = [];
            students[field].push(firstName);
            fields[field] = (fields[field] || 0) + 1;
            length++;
          }
        }

        const studentInfo = [];
        studentInfo.push(`Number of students: ${length}`);
        for (const [key, value] of Object.entries(fields)) {
          studentInfo.push(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }

        resolve(studentInfo.join('\n'));
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const databasePath = process.argv[2].toString();
  countStudents(databasePath)
    .then(studentInfo => response.send(['This is the list of our students', studentInfo].join('\n')))
    .catch(() => response.status(500).send('This is the list of our students\nCannot load the database'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
