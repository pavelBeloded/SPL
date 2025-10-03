class Human {
  constructor(firstName, lastName, birthYear, address) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
    this._address = address;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._birthYear;
  }

  set age(newAge) {
    const currentYear = new Date().getFullYear();
    this._birthYear = currentYear - newAge;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(year) {
    this._birthYear = year;
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(name) {
    this._firstName = name;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(surname) {
    this._lastName = surname;
  }
}

class Student extends Human {
  constructor(
    firstName,
    lastName,
    birthYear,
    address,
    faculty,
    course,
    group,
    recordBookNumber
  ) {
    super(firstName, lastName, birthYear, address);
    this._faculty = faculty;
    this._course = course;
    this._group = group;
    this._recordBookNumber = recordBookNumber;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  changeCourse(newCourse) {
    this._course = newCourse;
  }

  changeGroup(newGroup) {
    this._group = newGroup;
  }

  get faculty() {
    return this._faculty;
  }

  set faculty(faculty) {
    this._faculty = faculty;
  }

  get course() {
    return this._course;
  }

  set course(course) {
    this._course = course;
  }
  руппы;
  get group() {
    return this._group;
  }
  set group(group) {
    this._group = group;
  }

  get recordBookNumber() {
    return this._recordBookNumber;
  }

  set recordBookNumber(number) {
    this._recordBookNumber = number;
  }

  getSpecialty() {
    const specialtyCode = this._recordBookNumber.toString()[2];
    const specialties = {
      1: "ПОИТ",
      2: "ИСИТ",
      3: "ДЭВИ",
      4: "ПОИБМС",
    };
    return specialties[specialtyCode] || "Неизвестно";
  }

  getAdmissionYear() {
    const yearCode = this._recordBookNumber.toString().substring(3, 5);
    return 2000 + parseInt(yearCode);
  }

  getStudyType() {
    const studyCode = this._recordBookNumber.toString()[6];
    return studyCode === "1" ? "бюджет" : "платно";
  }
}

class Faculty {
  constructor(name, groupCount, studentCount, students = []) {
    this._name = name;
    this._groupCount = groupCount;
    this._studentCount = studentCount;
    this._students = students; // массив объектов Student
  }

  changeGroupCount(newCount) {
    this._groupCount = newCount;
  }

  changeStudentCount(newCount) {
    this._studentCount = newCount;
  }

  addStudent(student) {
    this._students.push(student);
    this._studentCount++;
  }

  getDev() {
    let devCount = 0;
    this._students.forEach((student) => {
      if (student.getSpecialty() === "ДЭВИ") {
        devCount++;
      }
    });
    return devCount;
  }

  getGroupe(groupName) {
    return this._students.filter((student) => student.group === groupName);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get groupCount() {
    return this._groupCount;
  }

  set groupCount(count) {
    this._groupCount = count;
  }
  get studentCount() {
    return this._studentCount;
  }

  set studentCount(count) {
    this._studentCount = count;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}

const student1 = new Student(
  "Иван",
  "Петров",
  2000,
  "ул. Ленина, 10",
  "ФИТ",
  3,
  "ПОИТ-301",
  712013001
);

const student2 = new Student(
  "Мария",
  "Сидорова",
  2001,
  "ул. Советская, 25",
  "ФИТ",
  2,
  "ДЭВИ-201",
  712023002
);

const student3 = new Student(
  "Алексей",
  "Козлов",
  1999,
  "ул. Мира, 15",
  "ИД",
  4,
  "ДЭВИ-401",
  612033003
);

const fitFaculty = new Faculty("ФИТ", 5, 0);
fitFaculty.addStudent(student1);
fitFaculty.addStudent(student2);

const idFaculty = new Faculty("ИД", 3, 0);
idFaculty.addStudent(student3);


console.log("\n1. Информация о студентах:");
console.log(
  `${student1.getFullName()}: ${
    student1.age
  } лет, специальность: ${student1.getSpecialty()}, группа: ${student1.group}`
);
console.log(
  `${student2.getFullName()}: ${
    student2.age
  } лет, специальность: ${student2.getSpecialty()}, группа: ${student2.group}`
);
console.log(
  `${student3.getFullName()}: ${
    student3.age
  } лет, специальность: ${student3.getSpecialty()}, группа: ${student3.group}`
);

console.log("\n2. Количество студентов ДЭВИ на факультетах:");
console.log(`ФИТ: ${fitFaculty.getDev()} студентов ДЭВИ`);
console.log(`ИД: ${idFaculty.getDev()} студентов ДЭВИ`);

console.log("\n3. Изменение данных:");
student1.changeCourse(4);
student1.changeGroup("ПОИТ-401");
console.log(
  `После изменений: ${student1.getFullName()} - курс: ${
    student1.course
  }, группа: ${student1.group}`
);

console.log("\n4. Работа с возрастом (геттер/сеттер):");
console.log(`Возраст ${student1.getFullName()}: ${student1.age} лет`);
student1.age = 25; 
console.log(
  `После изменения возраста: ${student1.age} лет, год рождения: ${student1.birthYear}`
);

console.log("\n5. Поиск студентов по группе:");
const deviStudents = fitFaculty.getGroupe("ДЭВИ-201");
console.log("Студенты группы ДЭВИ-201:");
deviStudents.forEach((student) => {
  console.log(`- ${student.getFullName()}`);
});
