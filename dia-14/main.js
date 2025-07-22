const newTaskInput = document.getElementById("new-task");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearBtn = document.getElementById("clear-completed");
const themeToggle = document.getElementById("toggle-theme");

let todos = [];
let filter = "all";

newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && newTaskInput.value.trim() !== "") {
    todos.push({ text: newTaskInput.value.trim(), completed: false });
    newTaskInput.value = "";
    renderTodos();
  }
});

function renderTodos() {
  todoList.innerHTML = "";

  const filtered = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  filtered.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-gray-700";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.className = "mr-3 w-4 h-4";
    checkbox.addEventListener("change", () => {
      todo.completed = !todo.completed;
      renderTodos();
    });

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.className = todo.completed ? "line-through text-gray-400" : "";

    li.appendChild(checkbox);
    li.appendChild(span);
    todoList.appendChild(li);
  });

  itemsLeft.textContent = `${todos.filter(t => !t.completed).length} items left`;
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("text-blue-400"));
    btn.classList.add("text-blue-400");
    filter = btn.dataset.filter;
    renderTodos();
  });
});

clearBtn.addEventListener("click", () => {
  todos = todos.filter(todo => !todo.completed);
  renderTodos();
});

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeToggle.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
});

renderTodos();