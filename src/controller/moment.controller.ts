import {Context} from "koa";
import {RouterContext} from "koa-router";
const momentsService = require('../service/moment.service')

class MomentController {
  async createMoment(ctx: Context & RouterContext, next: () => Promise<any>) {
    // 1.get data(user_id, content)
    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    console.log(userId, content)
    // 2. insert into database
    const result  = await momentsService.craete(userId, content)
    ctx.body = result
  }

  async momentDetail(ctx: Context & RouterContext, next: () => Promise<any>) {
    // 1.get moment
    const momentId = ctx.params.momentId

    // 2. search data by id
    const result = await momentsService.getMomentById(momentId)
    ctx.body = result[0]
  }
}


module.exports = new MomentController()
