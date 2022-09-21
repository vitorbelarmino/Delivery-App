require('dotenv').config();
const loginService = require('../services/login.service');
const { StatusCodes } = require('http-status-codes')


const login = async (req, res) => {
  const { email, password } = req.body
  const token = await loginService(email, password);
  res.status(StatusCodes.OK).json({ token });
};

module.exports = { login };