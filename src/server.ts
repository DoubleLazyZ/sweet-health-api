const app = require('./app');
require("./app/database")
const config = require('./app/config');



app
  .listen(config.APP_PORT, async() => {
    console.log("Server listening on port: "+ config.APP_PORT);
  })
  .on("error", (err: Error) => {
    console.error(err)
  })

module.exports = { app }