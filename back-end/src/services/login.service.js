require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const { createToken } = require('../auth/Jwt');
const { Users, Products, Sales, SalesProducts } = require('../database/models');
const { CustomError } = require('../helpers/customError');

const loginService = async (email, password) => {
  const user = await Users.findOne({ where: { email, password } });
  if (!user) throw new CustomError(StatusCodes.NOT_FOUND, 'Not found');

  const { password: pwd, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return token;
};

const teste = async () => {
  try {
    const result = await SalesProducts.findAll({
      include:
        [
          { model: Products, as: 'products' },
          { model: Sales, as: 'sales' },
        ],

    });
    return result;
  } catch (error) {
    console.log(error);
  }

  return [];
};

module.exports = { loginService, teste };