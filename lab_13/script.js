let todo;

document.addEventListener("DOMContentLoaded", () => {
  const loaded = load();
  const createButton = document.getElementById("create");

  if (loaded && loaded.length > 0) {
    createButton.style.display = "none";

    todo = new TodoList("Мой список", loaded);
    renderList(todo);
    renderTasks();
  } else {
    todo = new TodoList("Мой список");
    createButton.addEventListener("click", function () {
      this.style.display = "none";
      renderList(todo);
      renderTasks();
    });
  }
});

function renderList() {
  const list = document.createElement("div");
  list.className = "list";
  const addField = createAdd();
  const filters = createFilters();
  const container = document.querySelector(".container");
  container.append(addField, filters, list);
  addField.querySelector(".add_input").focus();
}

function createAdd() {
  const addField = document.createElement("div");
  addField.className = "add";
  const addInput = document.createElement("input");
  addInput.placeholder = "Введите название задачи";
  addInput.className = "add_input";
  addInput.type = "text";
  const addButton = document.createElement("button");
  addButton.textContent = "Добавить";
  addButton.className = "add_button";
  addField.append(addInput, addButton);

  function saveName() {
    if (!addInput.value) return;
    todo.addTask(addInput.value);
    addInput.value = "";
    renderTasks();
    save();
  }

  addInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      saveName();
    }
  });

  addButton.addEventListener("click", () => {
    saveName();
  });
  return addField;
}

function createFilters() {
  const filters = document.createElement("div");
  filters.className = "filters";

  const allButton = document.createElement("button");
  allButton.id = "all";
  allButton.className = "button filter";
  allButton.textContent = "Показать все";

  const completedButton = document.createElement("button");
  completedButton.id = "completed";
  completedButton.className = "button filter";
  completedButton.textContent = "Показать выполненные";

  const uncompletedButton = document.createElement("button");
  uncompletedButton.id = "uncompleted";
  uncompletedButton.className = "button filter";
  uncompletedButton.textContent = "Показать не выполненные";

  filters.appendChild(allButton);
  filters.appendChild(completedButton);
  filters.appendChild(uncompletedButton);

  allButton.addEventListener("click", () => renderTasks("all"));
  completedButton.addEventListener("click", () => renderTasks("completed"));
  uncompletedButton.addEventListener("click", () => renderTasks("uncompleted"));

  return filters;
}

function createTask(task) {
  const taskEl = document.createElement("div");
  taskEl.className = "task";

  const taskInfo = document.createElement("div");
  taskInfo.className = "task_info";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.isCompleted;

  const taskNameSpan = document.createElement("span");
  taskNameSpan.className = "task_name";
  taskNameSpan.textContent = task.name;

  if (task.isCompleted) {
    taskNameSpan.style.textDecoration = "line-through";
    taskNameSpan.style.color = "#888";
  }

  checkbox.addEventListener("change", function () {
    task.toggleCompleted();
    renderTasks();
    save();
  });

  taskInfo.append(checkbox, taskNameSpan);

  const taskActions = document.createElement("div");
  taskActions.className = "task_actions";

  const editButton = document.createElement("button");
  editButton.className = "button edit";
  editButton.textContent = "Редактировать";

  const deleteButton = document.createElement("button");
  deleteButton.className = "button delete";
  deleteButton.textContent = "Удалить";

  deleteButton.addEventListener("click", () => {
    todo.list = todo.list.filter((t) => t.id !== task.id);
    renderTasks();
    save();
  });

  editButton.addEventListener("click", () => {
    taskNameSpan.style.display = "none";
    const nameInp = document.createElement("input");
    nameInp.type = "text";
    nameInp.value = task.name;
    nameInp.className = "edit_input";
    taskInfo.append(nameInp);
    nameInp.focus();

    function saveEdit() {
      const newName = nameInp.value.trim();
      if (newName) {
        try {
          task.name = newName;
        } catch (e) {
          alert(e.message);
        }
      }
      renderTasks();
      save();
    }

    nameInp.addEventListener("blur", saveEdit);
    nameInp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        saveEdit();
      }
    });
  });
  taskActions.append(editButton, deleteButton);

  taskEl.append(taskInfo, taskActions);
  return taskEl;
}

function renderTasks(filter = "all") {
  const listContainer = document.querySelector(".list");
  listContainer.innerHTML = "";

  let tasks = [];
  if (filter === "all") tasks = todo.allTasks;
  if (filter === "completed") tasks = todo.filterTasks(true);
  if (filter === "uncompleted") tasks = todo.filterTasks(false);

  tasks.forEach((task) => {
    const taskEl = createTask(task);
    listContainer.appendChild(taskEl);
  });
}

function save() {
  const tasks = JSON.stringify(todo.allTasks);
  console.log(tasks);
  localStorage.setItem("tasks", tasks);
}
function load() {
  const tasks = localStorage.getItem("tasks");
  if (!tasks) {
    return false;
  }

  return JSON.parse(tasks);
}
