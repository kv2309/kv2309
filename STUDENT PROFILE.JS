const studentData = {
  '21MIC7068': {
    name: 'VAMSI',
    age: 20,
    department: 'Computer Science',
    grade: 'A',
  },
  '21MIC7069': {
    name: 'CHAITU',
    age: 21,
    department: 'Electrical Engineering',
    grade: 'C+',
  },
};

function getStudentDetails() {
  const regNumber = document.getElementById('regNumber').value;
  const studentDetailsDiv = document.getElementById('studentDetails');

  studentDetailsDiv.innerHTML = '';

  if (regNumber in studentData) {
    const student = studentData[regNumber];
    const detailsHTML = `
      <h3>Student Details</h3>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Department:</strong> ${student.department}</p>
      <p><strong>Grade:</strong> ${student.grade}</p>
    `;
    studentDetailsDiv.innerHTML = detailsHTML;
  } else {
    studentDetailsDiv.innerHTML = '<p class="error">Student not found</p>';
  }

  return false; // Prevent form submission
}
