import {Context} from "vm";
import {RouterContext} from "koa-router";

import {NAME_OR_PASSWORD_IS_REQUIRED} from "../constants/erro-type";

const verifyUser = async (ctx: Context & RouterContext, next: () => Promise<any>) => {
  // 1.獲得帳號和密碼
  const { name, password } = ctx.request.body

  // 2. 判斷用戶和密碼都不能是空
  // 沒有填和填入空字串
  if(!name || !password || name === "" || password === "") {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error , ctx);
  }

  // 3.這個註冊的用戶名有沒有被註冊過
  await next();
}


export { verifyUser }