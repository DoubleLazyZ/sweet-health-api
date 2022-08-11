import env from 'dotenv';

env.config();

const { APP_PORT  } = process.env;

module.exports = {
  APP_PORT
}