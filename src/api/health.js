const { getDb } = require('../lib/mongodb');
const { send } = require('../lib/http');

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    send(res, 204, null);
    return;
  }

  if (req.method !== 'GET') {
 