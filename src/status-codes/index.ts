import clientError from "./client-error";
import information from "./information";
import redirection from "./redirection";
import serverError from "./server-error";
import success from "./success";

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
