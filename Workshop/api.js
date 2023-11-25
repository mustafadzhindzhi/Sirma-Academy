export function fetchUsers(users) {
    fetch("http://127.0.0.1:3001/users")
        .then(response => response.json())
        .then(userData => {
            userData.forEach((user) => {
                users.push({ id: user.id, name: user.name });
            })
        });
        console.log(users);
};

export function fetchTasks() {
    fetch("http://127.0.0.1:3001/tasks")
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

            savedTaskToStorage(tempTasks)
            tempTasks.forEach(createTaskRow);
        });
};