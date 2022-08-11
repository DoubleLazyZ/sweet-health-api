import {RouterContext} from "koa-router";
import { Context } from 'koa';

const Router = require("koa-router");


const userRouter = new Router({prefix: '/users'});

userRouter.get('/', async (ctx: Context & RouterContext, next: () => Promise<any>) => {
  ctx.body = "user資料"
  next()
})

export default userRouter