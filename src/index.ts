import * as http from 'http';

import { getRandomStatusCode } from './status-codes';
import logger from './util/logger';

http
  .createServer((req, res) => {
    const statusCode = getRandomStatusCode();
    logger.info(`${req.method} ${req.url} ${JSON.stringify(req.headers)} ${statusCode}`);
    res.writeHead(statusCode);
    res.end();
  })
  .listen(process.env.PORT || 3000);
