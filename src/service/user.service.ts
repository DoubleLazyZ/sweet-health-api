import {Pool, RowDataPacket} from "mysql2";

const connection: Pool = require("../app/database")

interface IUser{
  name: string ;
  password: string;
}

interface IUserQueryResult extends IUser {
  email: string;
  createdAt: string;
  updatedAt: string;
}

// user對資料庫相關的操作
class UserService {
  async create(user: IUser) {
    // 將user存到database
    const {name, password} = user;

    const statement = `INSERT INTO users (name, password) VALUES  (?, ?)`;

    const result = await connection.execute(statement, [name, password]) as unknown as Array<any>
    return result[0]
  }

  async getUserByName(name: string){
    const statement = `SELECT * FROM users WHERE name = ?;`;
    const result = await connection.execute(statement, [name]) as unknown as Array<IUserQueryResult[] | any[]>;
    const [rows, field] = result
    return rows
  }
}

export default new UserService();