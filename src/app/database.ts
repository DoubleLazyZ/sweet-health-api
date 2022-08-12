import {PoolConnection} from "mysql2";

const mysql = require("mysql2");

const config = require('./config');

const connection = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_ROOT,
  password: config.MYSQL_PASSWORD
})


connection.getConnection((err: NodeJS.ErrnoException, conn: PoolConnection) => {
  conn.connect((err) => {
    if(err) {
      console.log("連結失敗")
    } else {
      console.log("連結成功")
    }
  })
})

module.exports = connection.promise();