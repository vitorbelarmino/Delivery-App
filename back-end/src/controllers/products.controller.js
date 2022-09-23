const { StatusCodes } = require('http-status-codes');
const { ProductsService } = require('../services/products.service');

const products = async (req, res) => {
  const allProducts = await ProductsService();
  res.status(StatusCodes.OK).json(allProducts);
};

module.exports = { products };