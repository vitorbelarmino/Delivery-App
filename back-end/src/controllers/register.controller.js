const { StatusCodes } = require('http-status-codes');
const { registerService } = require('../services/register.service');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = await registerService(name, email, password, role);
  res.status(StatusCodes.CREATED).json(newUser);  
};

module.exports = { register };