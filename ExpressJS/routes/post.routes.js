const express = require('express');
const router = express.Router();

const post = require('../models/post.model.js');
const validations = require('../middlewares/validation.js');

/**
 * Method for gettin all posts
*/
router.get('/',async (req, res) => {
    await post.getPosts()
        .then((posts) => res.json(posts)).catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            } else {
                res.status(500).json({ message: err.message })
            }
        })
});

router.get('/:id',validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    await post.getPost(+id).then(post => res.json(post))
    .catch(err => { //+ защото сме ги записали като число
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

router.post('/', validations.checkPostFields, async (req, res) => {
    await post.addPost(req.body)
    .then((post) => res.status(201).json(post))
    .catch(err => { 
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

router.put('/:id',validations.checkPostFields, validations.checkIsInteger, async (req, res) => {
    const {body} = req;
    const { id } = req.params;

    await post
    .updatePost(+id, body)
    .then(post => res.json(post))
    .catch(err => { 
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

router.delete('/:id',validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    await post
    .deletePost(+id)
    .then((message) => res.json(message))
    .catch(err => { //+ защото сме ги записали като число
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

module.exports = router;