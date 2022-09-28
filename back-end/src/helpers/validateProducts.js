const validateProducts = (productsDB, productReq) => {
  const idsDB = productsDB.map((product) => product.id);
  const idsReq = productReq.map((product) => product.productId);
  const validateId = idsReq.every((e) => idsDB.some((a) => e === a));
  return validateId;
};

module.exports = {
  validateProducts,
};