import env from 'dotenv';

env.config();

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