import clientError from "./client-error.js";
import information from "./information.js";
import redirection from "./redirection.js";
import serverError from "./server-error.js";
import success from "./success.js";

export type StatusCode = {
  code: number;
  name: string;
};

const allStatusCodes: number[] = ([] as StatusCode[])
  .concat(information, success, redirection, clientError, serverError)
  .map((sc) => sc.code);

export function getRandomStatusCode() {
  const random = Math.floor(Math.random() * allStatusCodes.length);
  return allStatusCodes[random];
}
