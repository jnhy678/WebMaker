const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
    res.render('app.html');
});


module.exports = Router