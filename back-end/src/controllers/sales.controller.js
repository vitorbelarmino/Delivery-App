const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/sales.service');

const createSale = async (req, res) => {
  const sale = req.body;
  const newSale = await saleService.createSale(sale);
  res.status(StatusCodes.CREATED).json(newSale);
};

module.exports = {
  createSale,
};