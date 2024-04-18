const express = require('express');
let router = express.Router();

let users = require('./users');

router.use('/users', users);

module.exports = router;