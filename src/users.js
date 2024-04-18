
let users = function (database) {
  let _database = database;
  
  let cFind = (function(_req) {
    let req = _req

    function userList() {
      try {
        return new Promise((resolve, reject) => { 
          let sQuery = `
            SELECT  
              IDX, id, PASSWORD, username, age, 
              address, address2, phonenum, jop, route, 
              jumin
            FROM
              users
            `
            console.log('sQuery:', sQuery);
            _database.RecordSet(sQuery)
            .then((result) => {
              resolve(result);
            }).catch((err) => reject(err));
        })
      } catch (error) {
        console.error(error.message);
      }
    }

    function login(req) {
      try {
        return new Promise((resolve, reject) => {
          let params = req
          let sQuery = `
            SELECT  
              *
            FROM
              users
            WHERE
              id = '${params.id}'
              AND password = '${params.password}'
            `
            console.log('sQuery:', sQuery);
            _database.RecordSet(sQuery)
            .then((result) => {
              resolve(result);
            }).catch((err) => reject(err));
        })
      } catch (error) {
        console.error(error.message);
      }
    }

    return {
      users: userList,
      login: login
    }
  })();
  
  let cUpdate = (function() {
    return {
    }
  })();

  let cInsert = (function() {

    function setUser(req) {
      try {
        return new Promise((resolve, reject) => { 
          let item = req.body
          let sQuery = `
            INSERT INTO users (
              id, PASSWORD, username, age, 
              address, address2, phonenum, jop, route, 
              jumin
            )
            VALUES (
              '${item.id}', '${item.password}', '${item.username}', '${item.age}',
              '${item.address}', '${item.address2}', '${item.phonenum}', '${item.jop}','${item.route}',
              '${item.jumin}'
            )
            `
            console.log('sQuery:', sQuery);
            _database.RecordSet(sQuery)
            .then((result) => {
              resolve(result);
            }).catch((err) => reject(err));
        })
      } catch (error) {
        console.error(error.message);
      }
    }
    
    return {
      setUser: setUser
    }
  })();

  let cDelete = (function() {
    return {
    }
  })();

  return {
    Find: cFind,
    Update: cUpdate,
    Insert: cInsert,
    Delete: cDelete
  }
};

module.exports = users;