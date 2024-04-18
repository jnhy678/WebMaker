var express = require('express');
var database = require('../../src/database');
var router = express.Router();

var Users = Server.Users;

// router.get('/', function (req, res, next) {
//   console.log('users');
//   const query = 'SELECT * FROM users';
//   database.RecordSet(query)
//   .then((result) => {
//     console.log('res', result);
//     res.json(result);
//   })
// });
router.get('/', function (req, res, next) {
  Users.Find.users()
  .then((result) => {
    console.log('res', result);
    res.json(result);
  })
});
router.get('/login', async function (req, res, next) {
  console.log('login params:', await req.query)
  Users.Find.login(req.query)
  .then((result) => {
    console.log('res', result);
    //아이디 가져와서 비번일치하는지 확인
    res.json(result);
  })
});
router.post('/', function (req, res, next) {
  Users.Insert.users(req)
  .then((result) => {
    console.log('res', result);
    res.json(result);
  })
});


module.exports = router;