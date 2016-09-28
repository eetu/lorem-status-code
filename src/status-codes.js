const _ = require('lodash');
const clientError = require('./codes/client-error.json');
const information = require('./codes/information.json');
const redirection = require('./codes/redirection.json');
const serverError = require('./codes/server-error.json');
const success = require('./codes/success.json');

const allStatusCodes = _.concat(information, success, redirection, clientError, serverError)
  .map((sc) => sc.code);

function getRandomStatusCode() {
  return _.sample(allStatusCodes);
}

module.exports = {
  getRandomStatusCode,
}
