const fs = require('fs');

function countStudents (path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    // Initialize variables to store the count of students in each field
    let mathCount = 0;
    let CSCount = 0;
    const fields = {};

    // Iterate through each line of the CSV data
    for (const line of lines) {
      const studentData = line.split(',');

      // Check if the line contains valid student data
      if (studentData.length === 4) {
        const [firstName, lastName, age, field] = studentData;

        // Increment the count of students in the corresponding field
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

    // Log the number of students in each field
    console.log(`Number of students: ${mathCount + CSCount}`);
    console.log(`Number of students in Math: ${mathCount}. List: ${fields.Math.join(', ')}`);
    console.log(`Number of students in CS: ${CSCount}. List: ${fields.CS.join(', ')}`);
  } catch (error) {
    // If the database is not available, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
