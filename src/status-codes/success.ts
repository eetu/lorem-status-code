import { StatusCode } from ".";

const success: StatusCode[] = [
  { code: 200, name: "OK" },
  { code: 201, name: "Created" },
  { code: 202, name: "Accepted" },
  { code: 203, name: "NonAuthoritativeInformation" },
  { code: 204, name: "NoContent" },
  { code: 205, name: "ResetContent" },
  { code: 206, name: "PartialContent" },
  { code: 207, name: "MultiStatus" },
  { code: 208, name: "AlreadyReported" },
  { code: 226, name: "IMUsed" },
];

export default success;
