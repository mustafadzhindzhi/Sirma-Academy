const express = require('express');
const router = express.Router();

const Post = require('../models/post.model.js');
const validations = require('../middlewares/validation.js');

router.get('/', async (req, res) => {
    try {
        const dataSaved = await Post.find();
        res.json(dataSaved);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.get('/:id', validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    try {
        const dataSaved = await Post.findById(id);
        res.json(dataSaved);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.post('/', validations.checkPostFields, async (req, res) => {
    const data = new Post({
        title: req.body.title,
        content: req.body.content,
        keywords: req.body.keywords,
    });

    try {
        const dataSaved = await data.save();
        res.status(201).json(dataSaved);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.put('/:id', validations.checkPostFields, validations.checkIsInteger, async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const dataSaved = await Post.findByIdAndUpdate(id, body);
        res.send(dataSaved)
    } catch (err) {
        res.status().json({ message: err.message })
    }
    
});

router.delete('/:id', validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    try {
        const dataSaved = await Post.findByIdAndDelete(id);
        res.send(`Entry with ${dataSaved.id} has been deleted!`);
    } catch (err) {
        res.status().json({ message: err.message })
    }
});

module.exports = router;