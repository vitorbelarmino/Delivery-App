require('dotenv').config();
const authService = require('../services/auth.service');

const login = async (req, res) => {
  const { email, password } = authService.validatePostLogin(req.body); // joi

  // const { email, password} = req.body;

  const token = await authService.validateCredentials(email, password)

  res.status(200).json({ token });
};

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  const user = authService.validateToken(authorization);
  req.user = user;

  next();
};

module.exports = { login, validateToken };