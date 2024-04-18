const database = require('./database');
const users = require('./users');

let Server = (function () {
  
  return {
    Users: users(database),
  }
})();

module.exports = Server;