import {Context} from "koa";

const service = require("../service/user-service")

class UserController {
  async create(ctx: Context, next: () => Promise<any>) {
    // 得到使用者傳的資料
    const user = ctx.request.body
    // 查資料
    const result:string = await service.create(user)
    console.log(result)
    // 返回資料
    ctx.body = result
  }
}
module.exports = new UserController();