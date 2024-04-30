export default function getListStudentIds (studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const idArray = studentsArray.map((item) => item.id);
  return idArray;
}
