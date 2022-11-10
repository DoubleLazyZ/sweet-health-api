import Koa from "koa";
import cors from "koa2-cors"
import logger from "koa-logger"
import bodyParser from "koa-bodyparser";
import Application from "koa";

// import userRouter from "../router/user.router";
// import authRouter from "../router/auth.router";
import errorHandler from "../app/error-handle";
import useRoutes from "../router";

// 自定義myApp類型擴充koa Application類型
interface myApp extends Application{
  [key: string]: any;
}


const app:myApp = new Koa();


// body parser，這樣才可以解析body
app.use(bodyParser())

// cors
app.use(
  cors({
    origin: "*",
  })
)

// log 觀看錯誤紀錄
app.use(logger());

// // router
// app.use(userRouter.routes());
// app.use(authRouter.routes());
// // allowMethods
// app.use(userRouter.allowedMethods())
// app.use(authRouter.allowedMethods())

// router處理的部分，把他抽離出來。美化的方法可以讓格式符合app.xxx
app.useRoutes = useRoutes;
app.useRoutes();


// error錯誤處理。
app.on('error', errorHandler)

module.exports = app;
