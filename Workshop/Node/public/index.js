import { getTaskFromStorage, addTaskToStorage, updateTaskInStorage } from "./storage.js";
import { fetchUsers, fetchTasks } from "./api.js";
import { createTaskObject } from "./task.js";

const users = [{ id: 0, name: "Unknown user" }];

const form = document.querySelector('form.add-task');
const tbody = document.querySelector('table.task-table tbody');

const modalConteiner = document.querySelector('div.modal-container');
const btnCloseModal = modalConteiner.querySelector('span.close-btn');
const editForm = modalConteiner.querySelector('form.edit-task');


btnCloseModal.addEventListener('click', function (e) {
    modalConteiner.classList.remove('open');
});

function submitAddTaskForm(event) {
    event.preventDefault();
    const { target } = event;

    const userIdInput = target.querySelector('input[name="userId"]');
    const taskInput = target.querySelector('input[name="task"]');

    const userId = userIdInput.value.trim();
    const taskDescription = taskInput.value.trim();

    if (!userId || !taskDescription) {
        alert('Missing required fields in the application');
    };

    const task = createTaskObject(Math.random(), userId, taskDescription, false);

    addTaskRowToTable(task);
    addTaskToStorage(task);

    userIdInput.value = '';
    taskInput.value = '';
};

function createTaskRow(task) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-task-id', task.id);
    tr.addEventListener('click', handleRowClick(task));

    Object.keys(task).forEach((field) => {
        if (field === 'id') return;
        const td = document.createElement('td');
        td.textContent = task[field];

        tr.append(td);
    });

    return tr;
};

function addTaskRowToTable(task) {
    const tr = createTaskRow(task);
    tbody.append(tr);
}

function handleRowClick(task) {
    return function (event) {
        modalConteiner.classList.add('open');
        const editUserIdInput = editForm.querySelector('input[name="userId"]');
        const editTaskInput = editForm.querySelector('input[name="task"]');
        const editStatusInput = editForm.querySelector('input[name="status"]');

        editUserIdInput.value = task.userId;
        editTaskInput.value = task.taskDescription;
        editStatusInput.value = task.status;

        editForm.addEventListener('submit', handleEditTask());
    }
};

function handleEditTask(taskId) {
    return function (event) {
        event.preventDefault();

        const editUserIdInput = editForm.querySelector('input[name="userId"]');
        const editTaskInput = editForm.querySelector('input[name="task"]');
        const editStatusInput = editForm.querySelector('input[name="status"]');

        const userId = editUserIdInput.value.trim();
        const taskDescription = editTaskInput.value.trim();
        const status = editStatusInput.value.trim();

        if (!userId || !taskDescription || !status) {
            alert('Missing required fields in the application');
            return;
        }

        const task = createTaskObject(taskId, userId, taskDescription, status);

        const tr = createTaskRow(task);

        tbody.querySelector(`tr[data-task-id="${task.id}"]`).replaceWith(tr);

        updateTaskInStorage(task);

        modalConteiner.classList.remove('open');
    }
}

form.addEventListener('submit', submitAddTaskForm);

function loadInitialTasks() {
    const storedTasks = getTaskFromStorage();

    if (storedTasks.length > 0) {
        storedTasks.forEach(addTaskRowToTable);
        return;
    };

    fetchTasks();
};

function loadApplication() {
    fetchUsers(users);
    loadInitialTasks();
}

loadApplication();