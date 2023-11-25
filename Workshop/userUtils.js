export function getUsername(userId) {
    let userIndex = users.findIndex(user => user.id === +userId);

    if (userIndex < 0) { 
        userIndex = 0;
    };

    return users[userIndex].name;
}