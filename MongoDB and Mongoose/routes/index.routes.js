const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

router.use('/api/v1/posts', require('./post.routes.js'));
router.use('/api/v1/users', require('./user.routes.js'));

router.use('/api/api-docs', swaggerUi.serve);
router.get('/api/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;

