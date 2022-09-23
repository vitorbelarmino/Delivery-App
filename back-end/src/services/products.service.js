const { Products } = require('../database/models');

const ProductsService = async () => {
  const products = await Products.findAll();
  return products;
};

module.exports = { ProductsService };