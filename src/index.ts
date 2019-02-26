import * as http from 'http';

import { getRandomStatusCode } from './status-codes';
import logger from './util/logger';

const server = http
  .createServer((req, res) => {
    const statusCode = getRandomStatusCode();
    logger.info(`${req.method} ${req.url} ${JSON.stringify(req.headers)} ${statusCode}`);
    res.writeHead(statusCode);
    res.end();
  })
  .listen(process.env.PORT || 3000);

function shutdown() {
  logger.info('shutdown...');
  server.close();
  process.exit();
}

process.on('SIGTERM', async () => {
  shutdown();
});

process.on('SIGINT', async () => {
  shutdown();
});
