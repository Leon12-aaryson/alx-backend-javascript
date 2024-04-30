const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then(studentInfo => res.end(studentInfo))
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
