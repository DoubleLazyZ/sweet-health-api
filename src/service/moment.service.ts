import {Pool} from "mysql2";

const connection: Pool = require("../app/database")

class MomentService {
  async craete(userId: number, content: string) {
    const statement = `INSERT INTO moment (user_id, content) VALUES  (?, ?);`
    const result = await connection.execute(statement, [userId, content]) as unknown as Array<any>
    return result[0]
  }

  async getMomentById(id: string) {
    const statement = `
     SELECT
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime, JSON_OBJECT('id', u.id, 'name', u.name) user
        FROM moment m
        LEFT JOIN users u ON m.user_id = u.id
        WHERE m.id = ?;
      `
    const result = await connection.execute(statement, [id]) as unknown as Array<any>
    return result[0]
  }
}

module.exports = new MomentService();
