import { createLogger, format, transports } from "winston";

const level = process.env.LOGGER_LEVEL;
const isProd = process.env.NODE_ENV === "production";

const logger = createLogger({
  format: format.combine(format.colorize({ all: !isProd }), format.simple()),
  level,
  transports: [new transports.Console()],
});

export default logger;
