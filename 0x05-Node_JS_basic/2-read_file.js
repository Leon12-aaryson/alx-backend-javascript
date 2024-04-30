const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = {};
    const fields = {};

    data.trim().split('\n').forEach(line => {
      if (line) {
        const [firstName, lastName, age, field] = line.split(',');
        students[field] = students[field] || [];
        students[field].push(firstName);
        fields[field] = (fields[field] || 0) + 1;
      }
    });

    const totalStudents = Object.values(fields).reduce((acc, count) => acc + count, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
