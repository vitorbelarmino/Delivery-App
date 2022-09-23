const { StatusCodes } = require('http-status-codes');
const { registerService } = require('../services/register.service');

const registerController = async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = await registerService(name, email, password, role);
  res.status(StatusCodes.CREATED).json({ message: 'created', data: newUser });  
};

module.exports = { registerController };