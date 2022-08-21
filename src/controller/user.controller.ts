import {Context} from "koa";
import service from "../service/user.service"
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";

// 關於user的操作
class UserController {
  async create(ctx: Context, next: () => Promise<any>) {
    // 得到使用者傳的資料
    const user = ctx.request.body
    // 查資料
    const result = await service.create(user)

    // 返回資料
    ctx.body = result
  }
}

export default new UserController();