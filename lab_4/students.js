

class Student {
  students = new Set();


  constructor (studentsList) {
    studentsList.map((student) => {
      this.addStudent(student);
    });
  }

    sortByNumber() {
        let studentsArr = Array.from(students);
        studentsArr.sort((a, b)=> a.number - b.number);
        return this.student = new Set(studentsArr);
    }

  deletStudentByNumber(number) {
    for (let student of this.students) {
      if (student.number == number) {
        return this.students.delete(student);
      }
    }
  }

  static createStudent() {
    let student = {};
    let userInput = prompt(
      "Enter student info, separated by ,: (number, group, name, surname, patronymic)"
    );
    let studentInfo = userInput.split(",");
    student.number = +studentInfo[0];
    student.group = +studentInfo[1];
    student.name = studentInfo[2];
    student.surname = studentInfo[3];
    student.patronymic = studentInfo[4];
    return student;
  }

  addStudent(studentInfo) {
    return this.students.add(studentInfo);
  }

  filterByGroup(group) {
    return Array.from(this.students).filter((student) => student.group == group);
  }
}

let students = [{
  number: 1234567,
  group: 3,
  name: "Pavel",
  surname: "Beloded",
  patronymic: "Vyacheslavovish",
},
{
  number: 142,
  group: 4,
  name: "D",
  surname: "F",
  patronymic: "F"
}
];


let studentList = new Student(students);