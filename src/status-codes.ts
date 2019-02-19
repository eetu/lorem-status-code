import clientError from './codes/client-error.json';
import information from './codes/information.json';
import redirection from './codes/redirection.json';
import serverError from './codes/server-error.json';
import success from './codes/success.json';

const allStatusCodes = []
  .concat(information, success, redirection, clientError, serverError)
  .map((sc) => sc.code);

export function getRandomStatusCode() {
  const random = Math.floor(Math.random() * allStatusCodes.length);
  return allStatusCodes[random];
}
