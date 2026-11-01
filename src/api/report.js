const { send } = require('../../lib/http');

module.exports = function handler(req, res) {
  send(res, 404, { error: 'Not found' });
};
