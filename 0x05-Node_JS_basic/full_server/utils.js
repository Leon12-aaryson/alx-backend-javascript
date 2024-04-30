const fs = require('fs');

function readDatabase (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        const lines = data.trim().split('\n');
        const studentsByField = {};
        lines.slice(1).forEach((line) => { // Skip the header line
          const [firstName, lastName, age, field] = line.split(',');
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        });
        resolve(studentsByField); // Resolve the promise with the object of arrays
      }
    });
  });
}
