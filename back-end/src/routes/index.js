const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers/login.controller');
const { registerController } = require('../controllers/register.controller');
const { productsController } = require('../controllers/products.controller');
const {
  validateLogin,
  validateRegister,
  validateSale,
  validateStatus,
} = require('../middleware/validations');
const sale = require('../controllers/sales.controller');
const userController = require('../controllers/user.controller');

router.post('/login', validateLogin, loginController)
  .post('/register', validateRegister, registerController)
  .get('/customer/products', productsController)
  .post('/sale', validateSale, sale.createSale)
  .get('/sales', sale.allUserSales)
  .get('/sale/:id', sale.saleById)
  .put('/sale/:id', validateStatus, sale.statusUpdate)
  .get('/user/:role', userController.getUserByRole);

module.exports = router;