const { readFile } = require('fs');

async function countStudents (path) {
  try {
    const students = {};
    const fields = {};
    let totalStudents = 0;

    const data = await readFileAsync(path);
    const lines = data.toString().split('\n').filter(Boolean);

    lines.forEach(line => {
      const [firstName, lastName, age, field] = line.split(',');
      if (!students[field]) students[field] = [];
      students[field].push(firstName);
      fields[field] = (fields[field] || 0) + 1;
      totalStudents++;
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, count] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
    }

    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

function readFileAsync (path) {
  return new Promise((resolve, reject) => {
    readFile(path, (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

module.exports = countStudents;
