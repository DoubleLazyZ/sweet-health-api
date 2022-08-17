import {Pool} from "mysql2";

const connection: Pool = require("../app/database")

type User = {
  name: string ;
  password: string;
}

// user對資料庫相關的操作
class UserService {
  async create(user: User) {
    // 將user存到database
    const {name, password} = user;

    const statement = `INSERT INTO users (name, password) VALUES  (?, ?)`;

    const result = await connection.execute(statement, [name, password])
    // [
        // {
        //   "fieldCount": 0,
        //   "affectedRows": 1,
        //   "insertId": 1,
        //   "info": "",
        //   "serverStatus": 2,
        //   "warningStatus": 0
        // },
      //   null
    // ]
    return result
  }
}

export default new UserService();