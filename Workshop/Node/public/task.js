import { getUsername } from "./userUtils.js";

export function createTaskObject (taskId, userId, taskDescription, status) {
    const task = {
        id: taskId,
        userId,
        username: getUsername(userId),
        taskDescription,
        status
    };

    return task;
}