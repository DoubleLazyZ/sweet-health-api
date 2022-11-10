const jwt = require('jsonwebtoken')

import { Context } from "vm";
import { RouterContext } from 'koa-router';

import {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_WRONG,
  UNAUTHORIZATION
} from '../constants/error-type'
import userService from "../service/user.service";
import { comparePassword } from "../utils/password-handle";
const { PUBLIC_KEY } = require('../app/config')


const verifyLogin = async(ctx: Context & RouterContext, next: () => Promise<any>) => {
  console.log(ctx)
  // 1.get user login info
  const { name, password } = ctx.request.body

  // 2.user input is null?
  if(!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }


  // 3. user is exists?
  const result = await userService.getUserByName(name);
  const user = result[0]
  if(!user) {
    const error = new Error(USER_DOES_NOT_EXISTS);
    return ctx.app.emit('error', error, ctx)
  }

  // 4.is the password correct?
  if(!await comparePassword(password, user.password)) {
    const error = new Error(PASSWORD_IS_WRONG)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = user;

  await next();
}
const verifyAuth = async(ctx: Context & RouterContext, next:() => Promise<any>) => {
  console.log('authorization')
  // 1. get Token
  const authorization = ctx.header.authorization as string;
  if (!authorization) {
    const error = new Error(UNAUTHORIZATION);
    return ctx.app.emit('error', error, ctx);
  }
  const token = authorization.replace('Bearer ', '');

  // 2. auth token
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });
    ctx.user = result;
    await next();
  } catch(err) {
    const error = new Error(UNAUTHORIZATION)
    ctx.app.emit('error', error)
  }
}
export {
  verifyLogin,
  verifyAuth
}
