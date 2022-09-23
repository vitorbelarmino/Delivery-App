const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers/login.controller');
const { registerController } = require('../controllers/register.controller');
const { productsController } = require('../controllers/products.controller');
const { validateLogin, validateRegister, validateSale } = require('../middleware/validations');
const sale = require('../controllers/sales.controller');

router.post('/login', validateLogin, loginController)
  .post('/register', validateRegister, registerController)
  .get('/customer/products', productsController)
  .post('/sale', validateSale, sale.createSale);

module.exports = router;