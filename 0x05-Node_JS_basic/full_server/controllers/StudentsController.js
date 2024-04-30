const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const studentsByField = await readDatabase(req.filePath);

      // Set content type to JSON
      res.setHeader('Content-Type', 'application/json');

      // Send response with student data
      res.status(200).json(studentsByField);
    } catch (error) {
      res.status(500).json({ error: 'Cannot load the database' });
    }
  }

  static async getAllStudentsByMajor (req, res) {
    try {
      const { major } = req.params;

      if (major !== 'CS' && major !== 'SWE') {
        return res.status(500).json({ error: 'Major parameter must be CS or SWE' });
      }

      const studentsByField = await readDatabase(req.filePath);

      // Extract students for the specified major
      const students = studentsByField[major] || [];

      // Send response with student data for the specified major
      res.status(200).json({ students });
    } catch (error) {
      res.status(500).json({ error: 'Cannot load the database' });
    }
  }
}

module.exports = StudentsController;
