const { StatusCodes } = require('http-status-codes');
const userService = require('../services/user.service');

const getUserByRole = async (req, res) => {
  const { role } = req.params;
  const users = await userService.getUserByRole(role);
  res.status(StatusCodes.OK).json(users);
};

module.exports = {
  getUserByRole,
};