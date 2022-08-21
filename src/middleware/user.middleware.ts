import {Context} from "vm";
import {RouterContext} from "koa-router";

import {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS,
  HASH_SECRET_IS_FAILED
} from "../constants/error-type";
import service from "../service/user.service"
import bcryptPassword from "../utils/password-handle";

const verifyUser = async (ctx: Context & RouterContext, next: () => Promise<any>) => {
  // 1.獲得帳號和密碼
  const { name, password } = ctx.request.body

  // 2. 判斷用戶和密碼都不能是空
  // 沒有填和填入空字串
  if(!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error , ctx);
  }

  // 3.這個註冊的用戶名有沒有被註冊過
  let rows = await service.getUserByName(name);
  if(rows.length) {
    const error = new Error(USER_ALREADY_EXISTS)
    return ctx.app.emit("error", error, ctx);
  }

  await next();
}


const handlePassword = async(ctx: Context & RouterContext, next: () => Promise<any>) => {
  const { password }= ctx.request.body;
  const bcryptedPassword = await bcryptPassword(password)
  if(bcryptedPassword instanceof Error) {
    const error = new Error(HASH_SECRET_IS_FAILED)
    ctx.app.emit("error", error, ctx)
  }

  ctx.request.body.password = bcryptedPassword
  await next();
}

export { verifyUser, handlePassword }