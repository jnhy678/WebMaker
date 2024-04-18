const mysql = require('mysql2/promise');

let database = function () {
  
  let pool = null;
  let connection = null;

  // 연결 풀 생성 함수
  function createPool() {
    // MariaDB 연결 풀 생성
    pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '1358',
      database: 'webnext',
      connectionLimit: 5 // 연결 풀의 최대 연결 수
    }, function(err, _pool) {
      if (err) {
        console.error('Error creating connection pool:', err);
      } else {
        console.log('Connection pool created successfully');
        pool = _pool; // 생성된 풀을 전역 변수에 할당
      }
    });
  }

  // 연결 함수
  async function connect() {
    console.log('Connecting to database...');
    try {
      connection = await pool.getConnection();
      console.log('Connected to database');
      return connection; // 연결된 connection 반환
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }

  // 쿼리 실행 함수
  async function Execute(query, params) {
    try {
      if (!connection) {
        // 연결이 아직 이루어지지 않았다면 연결을 시도합니다.
        connection = await connect();
      }
      
      const [rows, fields] = await connection.execute(query, params);
      return rows;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  function RecordSet(query, callback) {
      return new Promise(async function (resolve, reject) {
          try {
            if (!connection) {
              // 연결이 아직 이루어지지 않았다면 연결을 시도합니다.
              connection = await connect();
            }
            const [rows, fields] = await connection.query(query, []);
            connection.release();
            resolve(rows);
          } catch (error) {
              reject(error);
          }
      });
  }

  // 연결 풀 및 연결 생성
 createPool();

  // 최초 연결 시도 후 결과를 콘솔에 출력
  connect()
  .then(() => {
    console.log('connect successful !!');
  }).catch(error => {
    console.error('connect failed:', error);
  });
  return {
    pool,
    // connect,
    Execute,
    RecordSet,
  }
}

module.exports = database();
