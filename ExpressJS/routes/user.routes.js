const express = require('express');
const router = express.Router();

const user = require('../models/user.model.js');
const validations = require('../middlewares/validation.js');

/**
 * Method for gettin all users
*/
router.get('/',async (req, res) => {
    await user.getUser()
        .then((users) => res.json(users)).catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            } else {
                res.status(500).json({ message: err.message })
            }
        })
});

router.get('/:id',validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    await user.getUser(+id).then(user => res.json(user))
    .catch(err => { //+ защото сме ги записали като число
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

router.post('/', validations.checkUserField, async (req, res) => {
    await user.addUser(req.body)
    .then((user) => res.status(201).json(user))
    .catch(err => { 
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

router.put('/:id',validations.checkUserField, validations.checkIsInteger, async (req, res) => {
    const {body} = req;
    const { id } = req.params;

    await user
    .updateUser(+id, body)
    .then(user => res.json(user))
    .catch(err => { //+ защото сме ги записали като число
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

router.delete('/:id',validations.checkIsInteger, async (req, res) => {
    const { id } = req.params;

    await user
    .deleteUser(+id)
    .then((message) => res.json(message))
    .catch(err => { 
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

module.exports = router;