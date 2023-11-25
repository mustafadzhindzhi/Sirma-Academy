const STORAGE_KEY = "tasks";

export function getTaskFromStorage() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (storedTasks) {
        return JSON.parse(storedTasks);
    };

    return [];
};

export function savedTaskToStorage(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export function addTaskToStorage(task) {
    const storedTasks = getTaskFromStorage();

    storedTasks.push(task);
    savedTaskToStorage(storedTasks);
};

export function updateTaskInStorage (task) {
    const storedTasks = getTaskFromStorage();

    let taskIndex = storedTasks.findIndex((savedTask) => savedTask.id === task.id);

    if(taskIndex < 0) {
        taskIndex = 0;
    }

    storedTasks[taskIndex] = task;
    savedTaskToStorage(storedTasks)
}