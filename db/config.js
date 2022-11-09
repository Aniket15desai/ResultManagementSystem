const mysql = require("mysql");
const connection = mysql.createPool({
  host: process.env.HOST_NAME,
  user: 'root',
  password: process.env.PASSWORD,
  database: 'osrs_db',
  connectionLimit: 10,
});

module.exports = connection;