const { StatusCodes } = require('http-status-codes');
const md5 = require('md5');
const { createToken } = require('../auth/Jwt');
const { Users } = require('../database/models');
const { CustomError } = require('../helpers/customError');

const registerService = async (name, email, password, role = 'customer') => {
  const verifyName = await Users.findOne({ where: { name } });
  if (verifyName) throw new CustomError(StatusCodes.CONFLICT, 'Name already registered');
  
  const verifyEmail = await Users.findOne({ where: { email } });
  if (verifyEmail) throw new CustomError(StatusCodes.CONFLICT, 'Email already registered');

  const encryptedPassword = md5(password);
  
  const { id } = await Users.create({ name, email, password: encryptedPassword, role });
  const token = createToken({ name, email, password, role });
  return { name, email, role, token, id };
};

module.exports = { registerService };