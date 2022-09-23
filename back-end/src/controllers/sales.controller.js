const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/sales.service');

const createSale = async (req, res) => {
  const sale = req.body;
  const newSale = await saleService.createSale(sale);
  res.status(StatusCodes.CREATED).json(newSale);
};

const saleById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.saleById(Number(id));
  res.status(StatusCodes.OK).json(sale);
};

module.exports = {
  createSale,
  saleById,
};