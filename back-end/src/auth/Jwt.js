const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const jwtKey = require('fs').readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });
const { CustomError } = require('../helpers/customError');

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
  } catch (error) {
    throw new CustomError(StatusCodes.UNAUTHORIZED, error);
  }
};

module.exports = { createToken, validateToken };