const Router = require('koa-router');

const momentRouter = new Router({ prefix: '/moment'})


const {
  createMoment,
  momentDetail
} = require('../controller/moment.controller')

const {
  verifyAuth
}  = require('../middleware/auth.middleware')

momentRouter.post('/', verifyAuth, createMoment);
momentRouter.get('/:momentId', momentDetail);

module.exports = momentRouter
