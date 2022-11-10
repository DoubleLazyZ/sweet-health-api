import {RouterContext} from "koa-router";
import {
  NAME_OR_PASSWORD_IS_REQUIRED ,
  USER_ALREADY_EXISTS,
  HASH_SECRET_IS_FAILED,
  UNAUTHORIZATION
} from "../constants/error-type";

export const errorHandler = (error: Error, ctx: RouterContext) => {
  let status: number;
  let message;

  switch (error.message) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = "帳號和密碼不可以是空的。"
      break;
    case HASH_SECRET_IS_FAILED:
      status = 400;
      message = "密碼加密被拒，無法創建使用者。"
      break;
    case USER_ALREADY_EXISTS:
      status = 409; // conflict
      message = "使用者名稱已被使用"
      break;
    case UNAUTHORIZATION:
      status = 401;
      message = "無效的token"
      break;
    default:
      status = 404;
      message = "發生錯誤";
  }

  ctx.status = status;
  ctx.body = message;
}

export default errorHandler;

