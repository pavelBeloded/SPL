const person = {
  name: "Pavel",
  age: 18,

  greet() {
    return console.log("Hi " + this.name);
  },

  ageAfterYears(years) {
    return this.age + years;
  },
};

console.log(person.ageAfterYears(10));
person.greet();

const car = {
  model: "VW-POLO",
  year: 2024,
  getInfo() {
    return console.log(`model: ${this.model}, year: ${this.year}`);
  },
};

car.getInfo();

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.getTitle = () => this.title;
  this.getAuthor = () => this.author;
}

const book = new Book("Harry Potter", "Joanne Rowling");
console.log(book.getAuthor());
console.log(book.getTitle());

const team = {
  players: [
    { name: "Алексей", position: "вратарь", number: 1 },
    { name: "Дмитрий", position: "защитник", number: 4 },
    { name: "Сергей", position: "нападающий", number: 9 },
  ],

  getInfo() {
    this.players.forEach((player, index) => {
      console.log(
        index +
          ". name: " +
          player.name +
          " position " +
          player.position +
          " number: " +
          player.number
      );
    });
  },
};

team.getInfo();

let counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return this;
    },

    decrement: function () {
      count--;
      return this;
    },

    getValue: function () {
      return count;
    },
  };
})(); // не понял зачем тут скобки

console.log(counter.getValue());
console.log(counter.increment());
console.log(counter.getValue());

let item = {
  price: 212,
};

let descriptor = Object.getOwnPropertyDescriptor(item, "price");

console.log(JSON.stringify(descriptor, null, 2));

Object.defineProperty(item, "price", {
  writable: false,
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(item, "price");

console.log(JSON.stringify(descriptor, null, 2));

let circle = {
  _radius: 10,
  get area() {
    return Math.PI * this.radius ** 2;
  },

  get radius() {
    return this._radius;
  },

  set radius(value) {
    this._radius = value;
  },
};

console.log(circle.radius);
console.log(circle.area);
circle.radius = 5;
console.log(circle.radius);

const car_2 = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

console.log("Первоначальные дескрипторы:");
console.log(Object.getOwnPropertyDescriptor(car_2, "make"));
console.log(Object.getOwnPropertyDescriptor(car_2, "model"));
console.log(Object.getOwnPropertyDescriptor(car_2, "year"));

Object.defineProperty(car_2, "make", {
  writable: false,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(car_2, "model", {
  writable: false,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(car_2, "year", {
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(car_2, "make"));
console.log(Object.getOwnPropertyDescriptor(car_2, "model"));
console.log(Object.getOwnPropertyDescriptor(car_2, "year"));

let numbs = [1, 2, 3];

Object.defineProperty(numbs, "sum", {
  get: function () {
    return this.reduce((total, current) => total + current, 0);
  },
});

console.log(numbs.sum);

let rectangle = {
  _width: 100,
  _height: 100,

  get area() {
    return this.width * this.height;
  },

  get width() {
    return this._width;
  },

  get height() {
    return this._height;
  },

  set width(value) {
    this._width = value;
  },

  set height(value) {
    this._height = value;
  },
};

let user = {
  firstName: "pavel",
  lastName: "beloded",

  get fullName() {
    return [this.firstName, this.lastName];
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value;
  },
};

console.log(user.fullName);
user.fullName = ["nepavel", "nebeloded"];
console.log(user.fullName);
