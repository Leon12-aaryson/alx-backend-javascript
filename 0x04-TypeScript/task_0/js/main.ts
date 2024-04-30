interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

class StudentData implements Student {
    constructor(public firstName: string, public lastName: string, public age: number, public location: string) {
    }
}

const student1: Student = new StudentData('Sylivster', 'Mberenge', 218, 'Kalokero')
const student2: Student = new StudentData('Sheila', 'Birungi', 226, 'Kajjansi')

const studentList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.querySelector('body');
const table: HTMLTableElement = document.createElement('table');
const row: HTMLTableRowElement = document.createElement('tr');

// Creating the table header
row.innerHTML = `<tr><th>First Name</th><th>Location</th></tr>`;
table.appendChild(row);

// Appending all students to the table
studentList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    row.innerHTML = `<tr><th>${student.firstName}</th><th>${student.location}</th></tr>`;
    table.appendChild(row);
})

// Adding the table to the HTML body
body.appendChild(table);