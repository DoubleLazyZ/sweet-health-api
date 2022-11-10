import env from 'dotenv';
import { readFileSync } from "fs";
import path from  'path';
env.config();

const PRIVATE_KEY = readFileSync(path.resolve(__dirname, './keys/private.key'))
const PUBLIC_KEY = readFileSync(path.resolve(__dirname, './keys/public.key'))

const {
  APP_PORT,
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_ROOT
} = process.env;



module.exports = {
  APP_PORT,
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_ROOT
}

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
