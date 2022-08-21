import Koa from "koa";
import cors from "koa2-cors"
import logger from "koa-logger"
import bodyParser from "koa-bodyparser";
import Application from "koa";

import userRouter from "../router/user.router";
import authRouter from "../router/auth.router";
import errorHandler from "../app/error-handle";
import useRoutes from "../router";

interface myApp extends Application{
  [key: string]: any;
}

const app:myApp = new Koa();



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

// // router
// app.use(userRouter.routes());
// app.use(authRouter.routes());
// // allowMethods
// app.use(userRouter.allowedMethods())
// app.use(authRouter.allowedMethods())

app.useRoutes = useRoutes;


app.useRoutes();


// error
app.on('error', errorHandler)

module.exports = app;