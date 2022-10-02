const { StatusCodes } = require('http-status-codes');
const md5 = require('md5');
const { createToken } = require('../auth/Jwt');
const { Users } = require('../database/models');
const { CustomError } = require('../helpers/customError');

const loginService = async (email, password) => {
  const encryptedPassword = md5(password);
  const user = await Users.findOne({ where: { email, password: encryptedPassword } });
  if (!user) throw new CustomError(StatusCodes.NOT_FOUND, 'Email ou senha incorretos');

  const { password: pwd, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { ...userWithoutPassword, token };
};

module.exports = { loginService };