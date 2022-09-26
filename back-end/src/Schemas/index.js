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

  SellerName: {
    'any.required': 'Seller is required',
  },
  UserName: {
    'any.required': 'UserName is required',
  },

  price: {
    'any.required': 'Price is required',
  },
  address: {
    'any.required': 'Address is required',
  },
  number: {
    'any.required': 'Address number is required',
  },
  status: {
    'any.required': 'status is required',
    'any.only': 'tipo de status invalido',
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

const saleSchema = Joi.object({
  userName: Joi.string().min(12).required().messages(msgSchema.UserName),
  SellerName: Joi.string().min(12).required().messages(msgSchema.SellerName),
  price: Joi.number().required().messages(msgSchema.price),
  address: Joi.string().required().messages(msgSchema.address),
  number: Joi.number().required().messages(msgSchema.number),
});

const statusSchema = Joi.object({
  status: Joi.string()
  .required().valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue').messages(msgSchema.status),
});

module.exports = {
  loginSchema,
  registerSchema,
  saleSchema,
  statusSchema,
};