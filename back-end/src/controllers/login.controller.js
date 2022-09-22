require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService(email, password);
  res.status(StatusCodes.OK).json({ token });
};

module.exports = { login };