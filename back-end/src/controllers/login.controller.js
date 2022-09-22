require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const { loginService, teste } = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService(email, password);
  res.status(StatusCodes.OK).json({ token });
};

const all = async (req, res) => {
  const result = await teste();
  res.status(StatusCodes.OK).json(result);
};

module.exports = { login, all };