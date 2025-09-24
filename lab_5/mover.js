const STEP = 3;
const square = document.querySelector(".obj");
const startX = 500;
const startY = 500;
const button = document.querySelector("#button");

square.style.left = startX + "px";
square.style.top = startY + "px";

let X = startX;
let Y = startY;



function step(direction, elem) {
  switch (direction) {
    case "top":
      Y -= STEP;
      elem.style.top = Y + "px";
      break;
    case "bottom":
      Y += STEP;
      elem.style.top = Y + "px";
      break;

    case "left":
      X += STEP;

      elem.style.left = X + "px";
      break;

    case "right":
      X += STEP;

      elem.style.left = X + "px";
      break;
  }

  return [X, Y];
}

function step_10(direction, elem) {
  switch (direction) {
    case "top":
      Y -= 10 * STEP;
      elem.style.top = Y + "px";
      break;
    case "bottom":
      Y += 10 * STEP;
      elem.style.top = Y + "px";
      break;

    case "left":
      X -= 10 * STEP;

      elem.style.left = X + "px";
      break;

    case "right":
      X += 10 * STEP;

      elem.style.left = X + "px";
      break;
  }
  return [X, Y];
}

function* moveObj(x = 0, y = 0) {
  while (true) {
    let command = yield [x, y];
    switch (command) {
      case "top":
        [x, y] = step_10("top", square);
        yield [x, y];
      case "bottom":
        [x, y] = step_10("bottom", square);
        yield [x, y];
      case "left":
        [x, y] = step_10("left", square);
        yield [x, y];
      case "right":
        [x, y] = step_10("right", square);
        yield [x, y];
      default:
        console.log("Unknown command!");
    }
  }
}

const mover = moveObj(startX, startY);

console.log(mover.next().value);

function clickHandler() {
  let direction = prompt("Enter the step direction");
  console.log(mover.next(direction).value)
}

button.onclick = clickHandler;