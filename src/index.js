const koa = require('koa');
const statusCodes = require('./status-codes');
const bunyan = require('bunyan');

const app = koa();
const log = bunyan.createLogger({ name: 'lorem-status-code' });
const port = process.env.PORT || 3000;

const loggerStream = {
  write: (msg, encoding) => {
    log.info(msg)
  }
}

app.use(function *(next) {
  // log all requests
  log.info({req: this.request});
  yield next;
});

app.use(function *() {
  const statusCode = statusCodes.getRandomStatusCode();
  log.info('return client statusCode', statusCode);
  this.response.status = statusCode;
});

log.info('Listening on port', port);
app.listen(port);
