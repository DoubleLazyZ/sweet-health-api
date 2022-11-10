import Router from "koa-router";
import {
  verifyLogin,
  verifyAuth
} from '../middleware/auth.middleware';
const {
  login,
  success
} = require("../controller/auth.controller")


const authRouter = new Router();


authRouter.post('/login', verifyLogin, login)
authRouter.get('/test', verifyAuth, success);

export default authRouter;
module.exports = authRouter;
