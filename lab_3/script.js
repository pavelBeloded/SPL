// #1, 2 --------------------
let array = [1, [1, 2, [3, 4]], [2, 4]];

function flatArr(array) {
  return array.reduce(
    (accum, item) => accum.concat(Array.isArray(item) ? flatArr(item) : item),
    []
  );
}

function getSum(array) {
  return flatArr(array).reduce((accumulator, item) => accumulator + item, 0);
}

console.log(flatArr(array));
console.log(getSum(array));

// #3 -----------------------

const students = [
  { name: "Анна", age: 18, groupId: 101 },
  { name: "Иван", age: 17, groupId: 102 },
  { name: "Мария", age: 19, groupId: 101 },
  { name: "Петр", age: 16, groupId: 103 },
  { name: "Елена", age: 20, groupId: 102 },
  { name: "Алексей", age: 18, groupId: 103 },
  { name: "Ольга", age: 17, groupId: 101 },
  { name: "Дмитрий", age: 21, groupId: 104 },
  { name: "Светлана", age: 19, groupId: 102 },
  { name: "Сергей", age: 22, groupId: 104 }
];

function filterStudents(students) {
    return students.filter((student) => student.age > 17)
}

console.log(filterStudents(students))