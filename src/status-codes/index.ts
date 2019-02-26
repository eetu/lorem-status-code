import clientError from './client-error.json';
import information from './information.json';
import redirection from './redirection.json';
import serverError from './server-error.json';
import success from './success.json';

const allStatusCodes = []
  .concat(information, success, redirection, clientError, serverError)
  .map((sc) => sc.code);

export function getRandomStatusCode() {
  const random = Math.floor(Math.random() * allStatusCodes.length);
  return allStatusCodes[random];
}
