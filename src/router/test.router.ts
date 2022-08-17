import Router from "koa-router";

const testRouter = new Router();

testRouter.get('/', async (ctx) => {
  try {
    ctx.body = {
      status: 'success'
    }
  } catch (err) {
    console.error(err)
  }
})

export default testRouter