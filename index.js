const koa = require('koa');
const statusCodes = require('./src/status-codes');
const bunyan = require('bunyan');

const app = koa();
const log = bunyan.createLogger({ name: 'lorem-status-code' });
const port = process.env.PORT || 3000;

const loggerStream = {
  write: (msg, encoding) => {
    log.info(msg)
  }
}

app.use(function *() {
  // log all requests
  log.info({req: this.request});
});

app.use(function *() {
  const statusCode = statusCodes.getRandomStatusCode();
  this.response.status = statusCode;
});

log.info('Listening on port', port);
app.listen(port);
