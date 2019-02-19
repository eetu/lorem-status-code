import * as http from 'http';

import { getRandomStatusCode } from './error-codes';

http
  .createServer((req, res) => {
    res.writeHead(getRandomStatusCode());
    res.end();
  })
  .listen(3000);
