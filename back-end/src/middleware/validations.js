const { CustomError } = require('../helpers/customError');
const { loginSchema } = require('../Schemas');
const { StatusCodes } = require('http-status-codes')


const validateLogin = (req, res_, next) => {
  const login = req.body
  const { error } = loginSchema.validate(login);
  if (error) throw new CustomError(StatusCodes.BAD_REQUEST, error.message)
  next()
}

module.exports = {
  validateLogin
}
