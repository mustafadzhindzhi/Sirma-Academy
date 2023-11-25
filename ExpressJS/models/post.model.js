let posts = require('../data/posts.json');
const util = require('../utils/general.js');

const filename = "./data/posts.json";

function getPosts() {
    return new Promise((resolve, reject) => {
        if (!posts.length) {
            reject({
                message: "No posts found!",
                status: 204
            })
        };

        resolve(posts);
    })
};

function getPost(id) {
    return new Promise((resolve, reject) => {
        util.findByIdInArray(posts, id)
            .then((post) => resolve(post))
            .catch((err) => reject(err));
    })
};

function addPost(newPost) {
    return new Promise((resolve, reject) => {
        newPost = { id: util.generateNewId(posts), ...newPost };
        posts.push(newPost);
        util.writeJSONStorage(filename, posts);
        resolve({
            message: `The post was created with id: ${newPost.id}`,
            content: newPost,
        });
    })
};

function updatePost(id, newPost) {
    return new Promise((resolve, reject) => {
        util.findByIdInArray(posts, id)
            .then(post => {
                const entryIndex = posts.findIndex(p => p.id === id);
                posts[entryIndex] = {
                    id, ...newPost
                };

                util.writeJSONStorage(filename, posts);
                resolve({ message: `The posts with id ${id} was modified`, conten: newPost })
            })
            .catch((err) => reject(err))
    })
};

function deletePost(id) {
    return new Promise((resolve, reject) => {
        util.findByIdInArray(posts, id)
            .then(() => {
                posts = posts.filter(p => p.id !== id)
                util.writeJSONStorage(filename, posts)
                resolve({
                    message: `The post with id ${id} was delete successfully`
                })
            })
            .catch((err) => reject(err));
    })
}

module.exports = {
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost
}