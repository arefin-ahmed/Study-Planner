function addTask(e) {
  if (e && e.preventDefault) e.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    taskInput.focus();
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  taskInput.focus();
  displayTasks();
}

function toggleTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(index));

    const span = document.createElement("span");
    span.className = 'text' + (task.completed ? ' completed' : '');
    span.textContent = task.text;
    span.tabIndex = 0;
    span.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') toggleTask(index); });

    const actions = document.createElement('div');
    actions.className = 'actions';

    const deleteBtn = document.createElement("button");
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = "✖";
    deleteBtn.title = 'Delete task';
    deleteBtn.addEventListener('click', () => deleteTask(index));

    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('taskForm');
  if (form) form.addEventListener('submit', addTask);
  displayTasks();
});
