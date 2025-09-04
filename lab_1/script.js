// #1 -----------------
let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1 / 0;
let answer = true;
let no = null;

let arrayOfTypes = [a, name, i, double, result, answer, no];

arrayOfTypes.forEach((type) => console.log(typeof type));

// #2 -----------------
console.log("-------------------");

function CountSquares(squareSide, length, width) {
  const lengthCount = Math.floor(length / squareSide);
  const widthCount = Math.floor(width / squareSide);

  return lengthCount * widthCount;
}

console.log(CountSquares(5, 45, 21));

//  #3 -----------
console.log("-------------------");

i = 2;
a = ++i;
let b = i++;

console.log(a == b);

// #4 ------------
console.log("-------------------");

"Котик" == "котик" ? console.log(true) : console.log(false);
"Котик" == "китик" ? console.log(true) : console.log(false);
"Кот" == "Котик" ? console.log(true) : console.log(false);
"Привет" == "Пока" ? console.log(true) : console.log(false);
73 == "53" ? console.log(true) : console.log(false);
false == 0 ? console.log(true) : console.log(false);
54 == true ? console.log(true) : console.log(false);
123 == false ? console.log(true) : console.log(false);
true == "3" ? console.log(true) : console.log(false);
3 == "5мм" ? console.log(true) : console.log(false);
8 == "-1" ? console.log(true) : console.log(false);
34 == "34" ? console.log(true) : console.log(false);
null == undefined ? console.log(true) : console.log(false);

// #5 ---------------
console.log("-------------------");

// const teacherName = "Василий";
// let userInput = prompt("Введите имя преподавателя");
// let splittedInput = userInput.split(" ");

// splittedInput.forEach((elem) => {
//   if (elem.toLowerCase() == teacherName.toLowerCase()) {
//     alert("Данные верны");
//     return;
//   }
// });

//  #6 -----------
console.log("-------------------");

const exams = {
  math: false,
  rus: false,
  eng: false,
};

function isPassed(exams) {
  let havePassed = false;
  let haveFailed = false;
  for (subj in exams) {
    if (exams[subj]) {
      havePassed = true;
    } else haveFailed = true;
  }

  if (haveFailed && havePassed) {
    return console.log("Пересдача");
  }

  if (haveFailed) {
    return console.log("Отчислен");
  }

  return console.log("Переведен");
}

isPassed(exams);

// #7 --------------
console.log("-------------------");
console.log(true + true);
console.log(0 + "5");
console.log(5 + "mm");
console.log(8 / Infinity);
console.log(9 * "\n9");
console.log(null - 1);
console.log("5" - 2);
console.log("5px" - 3);
console.log(true - 3);
console.log(7 || 0);

// #8
console.log("-------------------");

function convert(lower, upper) {
  for (let i = lower; i <= upper; i++) {
    console.log(i % 2 == 0 ? i + 2 : i + "мм");
  }
  return;
}

convert(1, 10);

// #9
console.log("-------------------");

const daysObj = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
};

let dayNumber = parseInt(prompt("Введите номер дня недели (1–7):"));
console.log(daysObj[dayNumber] || "Некорректный номер дня");

const daysArr = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

dayNumber = parseInt(prompt("Введите номер дня недели (1–7):"));
console.log(daysArr[dayNumber - 1] || "Некорректный номер дня");

// #10 ----------------
console.log("-------------------");

function combineParams(param1, param2, param3 = "По умолчанию") {
  return `${param1}, ${param2}, ${param3}`;
}

let userInput = prompt("Введите третий параметр:");
result = combineParams(userInput, "Второй");
console.log(result);

// #11 ----------------------
console.log("-------------------");

function params(a, b) {
  if (a === b) {
    return 4 * a; 
  } else {
    return a * b; 
  }
}

const params = function(a, b) {
  return a === b ? 4 * a : a * b;
};

const params = (a, b) => a === b ? 4 * a : a * b;
