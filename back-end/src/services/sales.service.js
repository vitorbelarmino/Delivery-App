const { StatusCodes } = require('http-status-codes');
const { Users, Sales, Products, SalesProducts } = require('../database/models');
const { CustomError } = require('../helpers/customError');
const { validateProducts } = require('../helpers/validateProducts');
const { validateToken } = require('../auth/Jwt');

const createSale = async (sale, token) => {
  validateToken(token);
  const user = await Users.findOne({ where: { name: sale.userName } });
  if (!user) throw new CustomError(StatusCodes.BAD_REQUEST, 'Vendedor não cadastrado');
  const seller = await Users.findOne({ where: { name: sale.SellerName } });
  if (!seller) throw new CustomError(StatusCodes.BAD_REQUEST, 'Vendedor não cadastrado');
  const allProducts = await Products.findAll({ attributes: ['id'] });
  validateProducts(allProducts, sale.products);
  const newSale = await Sales.create({
    userId: user.id,
    sellerId: seller.id,
    totalPrice: sale.price,
    deliveryAddress: sale.address,
    deliveryNumber: sale.number,
  });
  sale.products.forEach((product) => SalesProducts.create(
    { saleId: newSale.id, productId: product.productId, quantity: product.quantity },
    ));
  return newSale;
};

const saleById = async (id) => {
  const sale = await Sales.findOne({ include: [{
    model: Products,
    as: 'products',
  }],
  where: { id } });
  if (!sale) throw new CustomError(StatusCodes.NOT_FOUND, 'Venda não encontrada');
  const seller = await Users.findOne({ where: { id: sale.seller_id } });
  return { sale, seller };
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