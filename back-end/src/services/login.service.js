require('dotenv').config();
const { createToken } = require('../auth/Jwt');
const { User } = require('../database/models');
const { CustomError } = require('../helpers/customError');
const { StatusCodes } = require('http-status-codes')


const loginService = async(email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new CustomError(StatusCodes.NOT_FOUND, 'Not found');

  const { password: pwd, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return token;
}

module.exports = loginService;