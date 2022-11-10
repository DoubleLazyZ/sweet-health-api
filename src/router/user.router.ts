import {RouterContext} from "koa-router";
import {Context} from 'koa';

import Router from "koa-router";
import userController from "../controller/user.controller";
import { verifyUser, handlePassword } from "../middleware/user.middleware";

// 使用者相關的API
const userRouter = new Router({prefix: '/users'});

// 取得使用者資料
userRouter.get('/', async (ctx: Context & RouterContext, next: () => Promise<any>) => {
  ctx.body = "user資料"
  next()
})

// 註冊使用者，需要通過中間件驗證、加密密碼
userRouter.post('/', verifyUser, handlePassword, userController.create)

export default userRouter
module.exports = userRouter
