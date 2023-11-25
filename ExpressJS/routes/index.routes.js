const express = require('express');
const router = express.Router();

router.use('/api/v1/posts', require('./post.routes.js'));
router.use('/api/v1/users', require('./user.routes.js'));

module.exports = router;

