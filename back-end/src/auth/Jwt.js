const jwt = require('jsonwebtoken');
require('dotenv/config');


const createToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, process.env.SECRET, jwtConfig);

  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.SECRET);

    return data;
  } catch (_err) {
    const e = new Error('Expired or invalid token');
    e.name = 'UnauthorizedError';
    throw e;
  }
};

module.exports = { createToken, validateToken };