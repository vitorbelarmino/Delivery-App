const express = require('express');

const router = express.Router();

const registerController = require('../controllers/register.controller');
const { validateRegister } = require('../middleware/validations');

router.post('/', validateRegister, registerController.register);

module.exports = router;