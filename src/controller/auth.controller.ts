const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require("../app/config");


import {Context} from "vm";
import {RouterContext} from "koa-router";


class AuthController {
  async login(ctx: Context & RouterContext, next: () => Promise<any>) {
    console.log(ctx.user)
    const {id, name} = ctx.user;
    const token = jwt.sign({id, name}, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    });
    ctx.body = { id, name, token }
  }

  async success(ctx: Context & RouterContext, next: () => Promise<any>) {
    ctx.body = "驗證成功"
  }
}

module.exports = new AuthController();
