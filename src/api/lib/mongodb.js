const { getDb } = require('../lib/mongodb');
const { send, readBody, clean } = require('../lib/http');

const CATEGORIES = [
  'Payment / UPI',
  'Phishing SMS / Link',
  'Social Media Hacked',
  'Work From Home',
  'Online Shopping',
  'Account Security',
  'Other Question'
];

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    send(res, 204, null);
    return;
  }

  if (req.method !== 'POST') {
  