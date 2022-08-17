import {RouterContext} from "koa-router";
import {NAME_OR_PASSWORD_IS_REQUIRED} from "../constants/erro-type";

export const errorHandler = (error: Error, ctx: RouterContext) => {
  let status: number;
  let message;

  switch (error.message) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = "帳號和密碼不可以是空的。"
      break;
    default:
      status = 404;
      message = "發生錯誤";
  }

  ctx.status = status;
  ctx.body = message;
}

export default errorHandler;

