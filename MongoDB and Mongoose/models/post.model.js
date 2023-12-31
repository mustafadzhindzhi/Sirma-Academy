const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    keywords: {
        required: false,
        type: Array,
    }
});

module.exports = mongoose.model("Post", postSchema);
