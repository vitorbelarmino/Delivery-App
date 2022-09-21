const Joi = require('joi');
const msgSchema = {
  email: {
    'any.required': 'email is required',
    'string.email': 'invalid email format'
  },
  Password: {
    'any.required': 'Password is required',
    'string.min': 'Password must be greater than 6'
  },
  defaultMsg: {
    'string.base': '"fields" must be a string', 
    'string.empty': 'Some required fields are missin2', 
    'any.required': 'Some required fields are missin3',
  },
};

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages(msgSchema.email),
  password: Joi.string().min(6).required().messages(msgSchema.requiredEmailPassword),
});

module.exports = {
  loginSchema
};