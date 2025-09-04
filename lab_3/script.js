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
  { name: "Сергей", age: 22, groupId: 104 },
];

function filterStudents(students) {
  return students.filter((student) => student.age > 17);
}

console.log(filterStudents(students));

// #4 --------------------------

function convertString(string) {
  const stringArr = string.split("");
  let codes = stringArr.map((item) => "" + item.charCodeAt());
  let total1 = Number(codes.join(""));

  let convertedCodes = codes.map((item) => item.replaceAll("7", "1"));
  let total2 = Number(convertedCodes.join(""));
  return total1 - total2;
}

// #5 -----------------------

function extend(...objects) {
  return JSON.parse(JSON.stringify(Object.assign(...objects)));
}

let obj = { a: 1, b: 2 };

console.log(extend(obj, { c: 3 }) === obj);

// #6 --------------------------

function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }
}
