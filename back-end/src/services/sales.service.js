const { Users, Sales } = require('../database/models');

const createSale = async (sale) => {
  const user = await Users.findOne({ name: sale.userName });
  const seller = await Users.findOne({ name: sale.sellerName });
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

module.exports = {
  createSale,
};