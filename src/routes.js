const express = require('express');
const router = express.Router();
const { sayHello } = require('./controller');

router.route('/say')
    .post(sayHello);

module.exports = router; // Correct the export
