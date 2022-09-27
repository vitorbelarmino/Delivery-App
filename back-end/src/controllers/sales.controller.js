const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/sales.service');

const createSale = async (req, res) => {
  const sale = req.body;
  const newSale = await saleService.createSale(sale);
  res.status(StatusCodes.CREATED).json(newSale);
};

const saleById = async (req, res) => {
  console.log('id');
  const { id } = req.params;
  const sale = await saleService.saleById(Number(id));
  res.status(StatusCodes.OK).json(sale);
};

const statusUpdate = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await saleService.statusUpdate(Number(id), status);
  res.status(StatusCodes.OK).end();
};

const allUserSales = async (req, res) => {
  console.log('name');
  const { name } = req.body;
  const allSales = await saleService.allUserSales(name);
  res.status(StatusCodes.OK).json(allSales);
};

module.exports = {
  createSale,
  saleById,
  statusUpdate,
  allUserSales,
};