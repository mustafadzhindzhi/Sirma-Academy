export function getUsername(userId) {
    let userIndex = users.findIndex(user => user.id === +userId);

    if (userIndex < 0) { // тъй като findIndex връща -1 ако не го намери
        userIndex = 0;
    };

    return users[userIndex].name;
}