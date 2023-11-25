const express = require('express');
const router = express.Router();

const User = require('../models/user.model.js');
const validations = require('../middlewares/validation.js');

router.get('/', async (req, res) => {
    try {
        const dataSaved = await User.find();
        res.json(dataSaved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    try {
        const dataSaved = await User.findById(id);
        res.json(dataSaved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', validations.checkUserField, async (req, res) => {
    const data = new User({
        name: req.body.name,
        lastname: req.body.lastname,
    });

    try {
        const dataSaved = await data.save();
        res.status(201).json(dataSaved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', validations.checkUserField, validations.checkIsInteger, async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const dataSaved = await User.findByIdAndUpdate(id, body);
        res.send(dataSaved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    try {
        const dataSaved = await User.findByIdAndDelete(id);
        res.send(`User with ${id} was deleted!`);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;