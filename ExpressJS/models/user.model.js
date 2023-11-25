let users = require('../data/users.json');
const util = require('../utils/general.js');

const filename = "./data/users.json";

function getUsers() {
    return new Promise((resolve, reject) => {
        if (!users.length) {
            reject({
                message: "No users found!",
                status: 204
            })
        };

        resolve(users);
    })
};

function getUser(id) {
    return new Promise((resolve, reject) => {
        util.findByIdInArray(users, id)
            .then((user) => resolve(user))
            .catch((err) => reject(err));
    })
};

function addUser(newUser) {
    return new Promise((resolve, reject) => {
        newUser = { id: util.generateNewId(users), ...newUser };
        users.push(newUser);
        util.writeJSONStorage(filename, users);
        resolve({
            message: `The user was created with id: ${newUser.id}`,
            content: newUser,
        });
    })
};

function updateUser(id, newUser) {
    return new Promise((resolve, reject) => {
        util.findByIdInArray(users, id)
            .then(user => {
                const entryIndex = users.findIndex(u => u.id === id);
                users[entryIndex] = {
                    id, ...newUser
                };

                util.writeJSONStorage(filename, users);
                resolve({ message: `The users with id ${id} was modified`, conten: newUser })
            })
            .catch((err) => reject(err))
    })
};

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        util.findByIdInArray(users, id)
            .then(() => {
                users = users.filter(u => u.id !== id)
                util.writeJSONStorage(filename, users)
                resolve({
                    message: `The user with id ${id} was delete successfully`
                })
            })
            .catch((err) => reject(err));
    })
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}