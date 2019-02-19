import * as http from 'http';

import { getRandomStatusCode } from './error-codes';

http
  .createServer((req, res) => {
    res.writeHead(getRandomStatusCode());
    res.end();
  })
  .listen(process.env.PORT || 3000);
