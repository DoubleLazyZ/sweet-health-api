import Koa from "koa";
import cors from "koa2-cors"
import logger from "koa-logger"
import bodyParser from "koa-bodyparser";
import userRouter from "../router/userRouter";

const app = new Koa();

// body parser
app.use(bodyParser())

// cors
app.use(
  cors({
    origin: "*",
  })
)

// log
app.use(logger());

// router
app.use(userRouter.routes());

// allowMethods
app.use(userRouter.allowedMethods())

module.exports = app;