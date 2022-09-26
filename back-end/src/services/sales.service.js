const { StatusCodes } = require('http-status-codes');
const { Users, Sales } = require('../database/models');
const { CustomError } = require('../helpers/customError');

const createSale = async (sale) => {
  const user = await Users.findOne({ where: { name: sale.userName } });
  if (!user) throw new CustomError(StatusCodes.BAD_REQUEST, 'Usuário não cadastrado');
  const seller = await Users.findOne({ where: { name: sale.SellerName } });
  if (!seller) throw new CustomError(StatusCodes.BAD_REQUEST, 'Vendedor não cadastrado');

  const ojectSele = {
    userId: user.id,
    sellerId: seller.id,
    totalPrice: sale.price,
    deliveryAddress: sale.address,
    deliveryNumber: sale.number,
  };
  const newSale = await Sales.create(ojectSele);
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

module.exports = {
  createSale,
  saleById,
  statusUpdate,
};