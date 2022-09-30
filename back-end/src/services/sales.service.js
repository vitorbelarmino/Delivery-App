const { StatusCodes } = require('http-status-codes');
const { Users, Sales, Products, SalesProducts } = require('../database/models');
const { CustomError } = require('../helpers/customError');
const { validateProducts } = require('../helpers/validateProducts');

const createSale = async (sale) => {
  const user = await Users.findOne({ where: { name: sale.userName } });
  const seller = await Users.findOne({ where: { name: sale.SellerName } });
  if (!seller) throw new CustomError(StatusCodes.BAD_REQUEST, 'Vendedor não cadastrado');
  const allProducts = await Products.findAll({ attributes: ['id'] });
  validateProducts(allProducts, sale.products);
  const ojectSele = {
    userId: user.id,
    sellerId: seller.id,
    totalPrice: sale.price,
    deliveryAddress: sale.address,
    deliveryNumber: sale.number,
  };
  const newSale = await Sales.create(ojectSele);
  sale.products.forEach((product) => SalesProducts.create(
    { saleId: newSale.id, productId: product.productId, quantity: product.quantity },
    ));
  return newSale;
};

const saleById = async (id) => {
  const sale = await Sales.findOne({ where: { id } });
  if (!sale) throw new CustomError(StatusCodes.NOT_FOUND, 'Venda não encontrada');
  return sale;
};

const statusUpdate = async (id, status) => {
  await Sales.update({ status }, { where: { id } });
};

const allUserSales = async (name) => {
  const user = await Users.findOne({ where: { name } });
  if (!user) throw new CustomError(StatusCodes.BAD_REQUEST, 'Usuário não cadastrado');
  const allSales = await Sales.findAll({ where: { userId: user.id } });
  return allSales;
};

module.exports = {
  createSale,
  saleById,
  statusUpdate,
  allUserSales,
};