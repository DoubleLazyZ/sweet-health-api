import { readdir } from 'node:fs/promises';
import Application from "koa";

// this這裡會被App:MyApp呼叫，直接在參數寫預設值才不會報錯
// 下面是動態的處理router檔案
// 每個router都會是koa-router的實例
const useRoutes = async function(this: Application) {
  const files = await readdir(`${__dirname}`)
  for(let file of files) {
    if(file === 'index.ts') continue
    const router = require(`./${file}`)
    this.use(router.routes());
    this.use(router.allowedMethods());
  }
}

export default useRoutes
