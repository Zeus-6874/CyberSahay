const { getDb } = require('../lib/mongodb');
const { send, readBody, clean } = require('../lib/http');

const TYPES = [
  'Phishing SMS / WhatsApp',
  'Payment / UPI Unauthorized',
  'Instagram / Social Impersonation',
  'Fake Job / Freelance Scam',
  'Shopping Site Scam',
  'Account Takeover',
  'Blackmail / Extortion',
  'Other'
];

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    send(res, 204, null);
    return;
  }

  if (req.method !== 'POST') {
  