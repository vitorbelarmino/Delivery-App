const Joi = require('joi');

const msgSchema = {
  name: {
    'any.required': 'name is required',
    'string.base': '"name" must be a string',
    'string.min': 'name must be greater than 12',
  },
  email: {
    'any.required': 'email is required',
    'string.base': '"string" must be a string',
    'string.email': 'invalid email format',
  },
  Password: {
    'any.required': 'Password is required',
    'string.base': '"password" must be a string',
    'string.min': 'Password must be greater than 6',
  },

  SellerName: {
    'string.base': '"sellerName" must be a string',
    'any.required': 'Seller is required',
  },
  UserName: {
    'string.base': '"UserName" must be a string',
    'any.required': 'UserName is required',
  },

  price: {
    'number.base': '"address" must be a number',
    'any.required': 'Price is required',
  },
  address: {
    'string.base': '"address" must be a string',
    'any.required': 'Address is required',
  },
  number: {
    'string.base': '"number" must be a string',
    'any.required': 'Address number is required',
  },
  status: {
    'any.required': 'status is required',
    'any.only': 'tipo de status invalido',
  },
  productId: {
    'any.required': 'productId is required',
    'number.base': '"productId" must be a number',
  },
  quantity: {
    'any.required': 'quantity is required',
    'number.base': '"quantity" must be a number',
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
  products: Joi.array().items(
    Joi.object({
      productId: Joi.number().required().messages(msgSchema.productId),
      quantity: Joi.number().required().messages(msgSchema.quantity),
    }).required(),
  ),
  userName: Joi.string().min(12).required().messages(msgSchema.UserName),
  SellerName: Joi.string().min(12).required().messages(msgSchema.SellerName),
  price: Joi.number().required().messages(msgSchema.price),
  address: Joi.string().required().messages(msgSchema.address),
  number: Joi.string().required().messages(msgSchema.number),
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