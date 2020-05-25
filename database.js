const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: ' sql2.freemysqlhosting.net',
  user: 'sql2342272',
  password: 'cE8%eG1*',
  database: 'sql2342272',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;