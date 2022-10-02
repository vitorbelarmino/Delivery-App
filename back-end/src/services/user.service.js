const { StatusCodes } = require('http-status-codes');
const { Users } = require('../database/models');
const { CustomError } = require('../helpers/customError');
const { validateToken } = require('../auth/Jwt');

const getUserByRole = async (role) => {
  const users = await Users.findAll({ where: { role } });
  return users;
};

const excludeById = async (id, token) => {
  validateToken(token);
  const user = await Users.findOne({ where: { id } });
  if (!user) throw new CustomError(StatusCodes.NOT_FOUND, 'Usuário não encontrado');
  await Users.destroy({ where: { id } });
  return { message: 'Usuário excluído' };
};

module.exports = {
  getUserByRole,
  excludeById,
};