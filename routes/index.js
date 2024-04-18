const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/app', (req, res) => {
    res.render('app');
});

router.get('/main', (req, res) => {
    res.render('main');
});


module.exports = router