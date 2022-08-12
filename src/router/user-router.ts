import {RouterContext} from "koa-router";
import { Context } from 'koa';

const Router = require("koa-router");
const { create } = require("../controller/userController")

const userRouter = new Router({prefix: '/users'});

userRouter.get('/', async (ctx: Context & RouterContext, next: () => Promise<any>) => {
  ctx.body = "user資料"
  next()
})

userRouter.post('/', create)

export default userRouter