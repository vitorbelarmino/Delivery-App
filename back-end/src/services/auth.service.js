require('dotenv').config();
const Joi = require('joi');
const jwtService = require('../auth/Jwt');
const { msgSchema } = require('../helpers/schemas');

const { User } = require('../database/models');


const authService = {
  validatePostLogin: (params) => {
    const schema = Joi.object({
      email: Joi.string().required().messages(msgSchema.requiredEmailPassword),
      password: Joi.string().required().messages(msgSchema.requiredEmailPassword),
    });

    const { error, value } = schema.validate(params);

    if (error) {
      const e = new Error(error.details[0].message);
      e.name = 'UnauthorizedError';
      throw e;
    }

    return value;
  },

  validateCredentials: async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
  
    if (!user) {
      const e = new Error('Invalid fields');
      e.name = 'ValidationError';
      throw e;
    }

    const { password: pwd, ...userWithoutPassword } = user.dataValues;
    const token = jwtService.createToken(userWithoutPassword);

    return token;
  },

  validateToken: (token) => {
    if (!token) {
      const e = new Error('Token not found');
      e.name = 'UnauthorizedError';
      throw e;
    }

    const user = jwtService.validateToken(token);

    return user;
  },
};

module.exports = authService;