const { StatusCodes } = require('http-status-codes');
const userService = require('../services/user.service');

const getUserByRole = async (req, res) => {
  const { role } = req.params;
  const users = await userService.getUserByRole(role);
  res.status(StatusCodes.OK).json(users);
};

const excludeById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const message = await userService.excludeById(Number(id), authorization);
  res.status(StatusCodes.OK).json(message); 
};

module.exports = {
  getUserByRole,
  excludeById,
};