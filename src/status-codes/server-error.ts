import { StatusCode } from "./index.js";

const serverError: StatusCode[] = [
  { code: 500, name: "InternalServerError" },
  { code: 501, name: "NotImplemented" },
  { code: 502, name: "BadGateway" },
  { code: 503, name: "ServiceUnavailable" },
  { code: 504, name: "GatewayTimeout" },
  { code: 505, name: "HTTPVersionNotSupported" },
  { code: 506, name: "VariantAlsoNegotiates" },
  { code: 507, name: "InsufficientStorage" },
  { code: 508, name: "LoopDetected" },
  { code: 510, name: "NotExtended" },
  { code: 511, name: "NetworkAuthenticationRequired" },
];

export default serverError;
