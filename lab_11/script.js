class Task {
  static #currentTask = 0;
  #id;
  #name;
  #isCompleted;

  constructor(name = "default name") {
    this.#id = Task.#currentTask++;
    this.isCompleted = false;
    this.name = name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (!value || value.length > 15) {
      throw new Error("Task name must be 1–15 characters long");
    }
    this.#name = value;
  }

  get isCompleted() {
    return this.#isCompleted;
  }

  set isCompleted(value) {
    this.#isCompleted = Boolean(value);
  }

  toggleCompleted() {
    return (this.isCompleted = !this.isCompleted);
  }
}

class TodoList {
  static #currentList = 0;
  #id;
  #name;

  list = [];

  constructor(name) {
    this.#id = TodoList.#currentList++;
    this.#name = name || `List ${this.#id}`;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (!value || value.length > 15) {
      throw new Error("List name must be 1–15 characters long");
    }
    this.#name = value;
  }

  addTask(name) {
    this.list.push(new Task(name));
  }

  filterTasks(completed = true) {
    return this.list.filter((task) => task.isCompleted === completed);
  }

  get allTasks() {
    return this.list;
  }
}

let list_1 = new TodoList("My List 1");
let list_2 = new TodoList("My List 2");

list_1.addTask("Go to shopping");
list_1.addTask("Clean");
list_1.allTasks.map((task) =>
  console.log(task.name + ", " + task.isCompleted + ", " + task.id)
);
list_1.allTasks[0].toggleCompleted();
list_1.allTasks.map((task) =>
  console.log(task.name + ", " + task.isCompleted + ", " + task.id)
);

list_2.addTask("Feed cat");
list_2.addTask("Buy car");
list_2.allTasks.map((task) =>
  console.log(task.name + ", " + task.isCompleted + ", " + task.id)
);
list_2.allTasks[0].toggleCompleted();
list_2.allTasks.map((task) =>
  console.log(task.name + ", " + task.isCompleted + ", " + task.id)
);

