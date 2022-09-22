const Joi = require('joi');

const msgSchema = {
  name: {
    'any.required': 'name is required',
    'string.min': 'name must be greater than 12',
  },
  email: {
    'any.required': 'email is required',
    'string.email': 'invalid email format',
  },
  Password: {
    'any.required': 'Password is required',
    'string.min': 'Password must be greater than 6',
  },
  defaultMsg: {
    'string.base': '"fields" must be a string',
    'string.empty': 'Some required fields are missin2',
    'any.required': 'Some required fields are missin3',
  },
};

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages(msgSchema.email),
  password: Joi.string().min(6).required().messages(msgSchema.Password),
});

const registerSchema = Joi.object({
  name: Joi.string().min(12).required().messages(msgSchema.name),
  email: Joi.string().email().required().messages(msgSchema.email),
  password: Joi.string().min(6).required().messages(msgSchema.Password),
  role: Joi.string(),
});

module.exports = {
  loginSchema,
  registerSchema,
};