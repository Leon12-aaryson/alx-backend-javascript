export default function getStudentIdsSum (studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const idSum = studentsArray.reduce((counter, studentsArray) => counter + studentsArray.id, 0);
  return idSum;
}
