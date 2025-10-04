class Task {
  static #currentTask = 0;
  #id;
  #name;
  #isCompleted;

  constructor(name = "default name", id = null, isCompleted = false) {
    if (id !== null) {
      this.#id = id;
      if (id >= Task.#currentTask) Task.#currentTask = id + 1;
    } else {
      this.#id = Task.#currentTask++;
    }

    this.name = name;
    this.isCompleted = isCompleted;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    if (!value || value.length > 15)
      throw new Error("Task name must be 1–15 characters long");
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

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      isCompleted: this.isCompleted,
    };
  }
}

class TodoList {
  static #currentList = 0;
  #id;
  #name;

  list = [];

  constructor(name, tasks = []) {
    this.#id = TodoList.#currentList++;
    this.#name = name || `List ${this.#id}`;

    tasks.forEach((t) => {
      this.list.push(new Task(t.name, t.id, t.isCompleted));
    });
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    if (!value || value.length > 15)
      throw new Error("List name must be 1–15 characters long");
    this.#name = value;
  }

  addTask(name) {
    this.list.push(new Task(name));
  }

  filterTasks(completed = true) {
    return this.list.filter((t) => t.isCompleted === completed);
  }
  get allTasks() {
    return this.list;
  }
}
