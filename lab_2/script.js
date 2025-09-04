function basicOperation(operation, value1, value2) {
  let result;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      if (value2 === 0) {
        return console.log("Деление на ноль!!");
      }
      result = value1 / value2;
      break;
  }

  return result;
}

let result = basicOperation("+", 5, 10);

function getCubeSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += n ** 3;
  }
  return result;
}

let cubeSum = getCubeSum(5);

function getAverage(nubmsArr) {
  let sum = 0;
  nubmsArr.forEach((number) => {
    sum += number;
  });

  return sum / nubmsArr.length;
}

let regExp = /[A-Z]/i;

const isEngLetter = (char) => {
  return regExp.test(char);
};

function flipStr(str) {
  let resultStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (isEngLetter(str[i])) {
      resultStr += str[i];
    }
  }

  return resultStr;
}

let str = "JavaScr53э? ip";
let newstr = flipStr(str);

function repeatStr(str, n) {
  let repatedStr = "";
  for (let i = 0; i < n; i++) {
    repeatStr += str;
  }
  return repatedStr;
}

//str.repeat(); ??

let arr1 = ["hi", "mur", "pavel", "bomb", "1", "2"];
let arr2 = ["Hallo", "gav", "beloded", "hi", "bomb"];

function getNewArr(arr1, arr2) {
  return arr1.filter((word) => !arr2.includes(word));
}
