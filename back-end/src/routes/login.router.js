const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login.controller');
const { validateLogin } = require('../middleware/validations');

router.post('/', validateLogin ,loginController.login);

module.exports = router;