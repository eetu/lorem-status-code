import * as http from "node:http";

import { getRandomStatusCode } from "./status-codes/index.js";
import logger from "./util/logger.js";

const server = http
  .createServer((req, res) => {
    const statusCode = getRandomStatusCode();
    logger.info(
      `${req.method} ${req.url} ${JSON.stringify(req.headers)} ${statusCode}`
    );
    res.writeHead(statusCode);
    res.end();
  })
  .listen(process.env.PORT || 3000);

logger.info(server.address());

function shutdown() {
  logger.info("shutdown...");
  server.close();
  process.exit();
}

process.on("SIGTERM", async () => {
  shutdown();
});

process.on("SIGINT", async () => {
  shutdown();
});
