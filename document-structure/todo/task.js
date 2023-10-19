const taskForm = document.querySelector('#tasks__form');
const taskInput = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');

function tasksAdd(evt) {
    evt.preventDefault();
    const taskText = taskInput.value;
    const taskHTML =
        `<div class="task">
		<div class="task__title">${taskText}</div>
		<a href="#" class="task__remove">&times;</a>
		</div>`;
    if (taskInput.value) taskList.insertAdjacentHTML('beforeend', taskHTML);
    taskInput.value = '';
    taskInput.focus();
    saveTasks();
}

function taskRemove(evt) {
    evt.preventDefault();
    const button = evt.target;
    if (button.classList.contains('task__remove')) {
        const parent = button.closest('.task');
        parent.remove();
    }
    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', taskList.innerHTML);
}

taskForm.addEventListener('submit', tasksAdd);
taskList.addEventListener('click', taskRemove);

if (localStorage.getItem('tasks')) {
    taskList.innerHTML = localStorage.getItem('tasks');
}