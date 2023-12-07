import { StatusCode } from ".";

const clientError: StatusCode[] = [
  { code: 400, name: "BadRequest" },
  { code: 401, name: "Unauthorized" },
  { code: 402, name: "PaymentRequired" },
  { code: 403, name: "Forbidden" },
  { code: 404, name: "NotFound" },
  { code: 405, name: "MethodNotAllowed" },
  { code: 406, name: "NotAcceptable" },
  { code: 407, name: "ProxyAuthenticationRequired" },
  { code: 408, name: "RequestTimeout" },
  { code: 409, name: "Conflict" },
  { code: 410, name: "Gone" },
  { code: 411, name: "LengthRequired" },
  { code: 412, name: "PreconditionFailed" },
  { code: 413, name: "PayloadTooLarge" },
  { code: 414, name: "URITooLong" },
  { code: 415, name: "UnsupportedMediaType" },
  { code: 416, name: "RangeNotSatisfiable" },
  { code: 417, name: "ExpectationFailed" },
  { code: 418, name: "ImATeapot" },
  { code: 421, name: "MisdirectedRequest" },
  { code: 422, name: "UnprocessableEntity" },
  { code: 423, name: "Locked" },
  { code: 424, name: "FailedDependency" },
  { code: 426, name: "UpgradeRequired" },
  { code: 428, name: "PreconditionRequired" },
  { code: 429, name: "TooManyRequests" },
  { code: 431, name: "RequestHeaderFieldsTooLarge" },
  { code: 451, name: "UnavailableForLegalReasons" },
];

export default clientError;
