import {RouterContext} from "koa-router";
import {Context} from 'koa';

import Router from "koa-router";
import userController from "../controller/user.controller";
import { verifyUser, handlePassword } from "../middleware/user.middleware";

const userRouter = new Router({prefix: '/users'});

userRouter.get('/', async (ctx: Context & RouterContext, next: () => Promise<any>) => {
  ctx.body = "user資料"
  next()
})


userRouter.post('/', verifyUser, handlePassword, userController.create)

export default userRouter
module .exports = userRouters