const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login.controller');
const { validateLogin } = require('../middleware/validations');

router.get('/', validateLogin ,loginController.all);

module.exports = router;