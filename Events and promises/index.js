const form = document.querySelector('form.add-task');
const tbody = document.querySelector('table.task-table tbody');

const modalConteiner = document.querySelector('div.modal-container');
const btnCloseModal = modalConteiner.querySelector('span.close-btn');
const editForm = modalConteiner.querySelector('form.edit-task');

console.log(modalConteiner);

const users = [{ id: 0, name: "Unknown user" }];

btnCloseModal.addEventListener('click', function (e) {
    modalConteiner.classList.remove('open');
})

function loadApplication() {
    fetchUsers();
    loadInitialTasks();
}

function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(userData => {
            userData.forEach((user) => {
                users.push({ id: user.id, name: user.name });
            })
        })
};

function fetchTasks() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((tasks) => {
            const tempTasks = tasks.map((task) => {
                return {
                    id: task.id,
                    userId: task.userId,
                    username: getUsername(task.userId),
                    taskDescription: task.title,
                    status: task.completed,
                };
            });

            localStorage.setItem('tasks', JSON.stringify(tempTasks));
            tempTasks.forEach(createTaskRow);
        });
};

function getTaskFromStorage() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        return JSON.parse(storedTasks);
    };

    return [];
}

function loadInitialTasks() {
    const storedTasks = getTaskFromStorage();

    if (storedTasks.length > 0) {
        storedTasks.forEach(createTaskRow);
        return;
    };

    fetchTasks();
};

function addTaskToStorage(task) {
    const storedTasks = getTaskFromStorage();

    storedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(parsedData));
}

function getUsername(userId) {
    let userIndex = users.findIndex(user => user.id === +userId);

    if (userIndex < 0) { 
        userIndex = 0;
    };

    return users[userIndex].name;
}

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

    const task = {
        userId,
        username: getUsername(userId),
        taskDescription,
        status: false
    };

    createTaskRow(task);
    addTaskToStorage(task);

    userIdInput.value = '';
    taskInput.value = '';
};

function createTaskRow(task) {
    //TODO: REFACTOR
    const tr = document.createElement('tr');
    tr.addEventListener('click', handleRowClick(task));

    Object.keys(task).forEach(field => {
        if(field === 'id') return;
        const td = document.createElement('td');
        td.textContent = task[field];

        tr.append(td);
    });
    tbody.prepend(tr);
};

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

function handleEditTask(e) {
    e.preventDefault();

    const editUserIdInput = editForm.querySelector('input[name="userId"]');
    const editTaskInput = editForm.querySelector('input[name="task"]');
    const editStatusInput = editForm.querySelector('input[name="status"]');

    const userId = editUserIdInput.trim();
    const taskDescription = editTaskInput.value.trim();
    const status = editStatusInput.value.trim();

    if(!userId || !taskDescription || !status) {
        alert('Missing required fields in the application');
    }
}

form.addEventListener('submit', submitAddTaskForm);

loadApplication();

