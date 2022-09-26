const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/customError');
const { loginSchema, registerSchema, saleSchema, statusSchema } = require('../Schemas');

const validateLogin = (req, res_, next) => {
  const login = req.body;
  const { error } = loginSchema.validate(login);
  if (error) throw new CustomError(StatusCodes.BAD_REQUEST, error.message);
  next();
};

const validateRegister = (req, res_, next) => {
  const login = req.body;
  const { error } = registerSchema.validate(login);
  if (error) throw new CustomError(StatusCodes.BAD_REQUEST, error.message);
  next();
};

const validateSale = (req, res_, next) => {
  const sale = req.body;
  const { error } = saleSchema.validate(sale);
  if (error) throw new CustomError(StatusCodes.BAD_REQUEST, error.message);
  next();
};

const validateStatus = (req, res_, next) => {
  const { status } = req.body;
  const { error } = statusSchema.validate({ status });
  if (error) throw new CustomError(StatusCodes.BAD_REQUEST, error.message);
  next();
};

module.exports = {
  validateLogin,
  validateRegister,
  validateSale,
  validateStatus,
};
