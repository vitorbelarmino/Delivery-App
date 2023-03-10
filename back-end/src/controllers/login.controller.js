const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../services/login.service');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService(email, password);
  res.status(StatusCodes.OK).json(user);
};

module.exports = { loginController };