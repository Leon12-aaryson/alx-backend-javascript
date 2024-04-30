const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      let mathCount = 0;
      let CSCount = 0;
      const fields = {};

      for (const line of lines) {
        const studentData = line.split(',');

        if (studentData.length === 4) {
          const [firstName, lastName, age, field] = studentData;

          if (field === 'Math') {
            mathCount++;
            if (!fields.Math) fields.Math = [];
            fields.Math.push(firstName);
          } else if (field === 'CS') {
            CSCount++;
            if (!fields.CS) fields.CS = [];
            fields.CS.push(firstName);
          }
        }
      }

      console.log(`Number of students: ${mathCount + CSCount}`);
      console.log(`Number of students in Math: ${mathCount}. List: ${fields.Math.join(', ')}`);
      console.log(`Number of students in CS: ${CSCount}. List: ${fields.CS.join(', ')}`);

      resolve();
    });
  });
}

module.exports = countStudents;
