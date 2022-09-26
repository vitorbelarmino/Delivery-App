const jwt = require('jsonwebtoken');
require('dotenv/config');
const jwtKey = require('fs').readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, jwtKey, jwtConfig);

  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, jwtKey);

    return data;
  } catch (_err) {
    const e = new Error('Expired or invalid token');
    e.name = 'UnauthorizedError';
    throw e;
  }
};

module.exports = { createToken, validateToken };