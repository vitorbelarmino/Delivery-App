const DATA_PRODUCT = 'carrinho';

export const dataProducts = () => (JSON.parse(localStorage.getItem(DATA_PRODUCT))) || [];

export const changeQuantity = (item) => {
  const products = dataProducts();

  const items = products.find((product) => product.productId === item.productId);

  if (item && item.quantity === 0) {
    this.removeProduct(item);
    return;
  }

  if (items) {
    items.quantity = item.quantity;
  } else {
    products.push(item);
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
};

export const addProducts = (item) => {
  const products = dataProducts();

  const items = products.find((product) => product.productId === item.productId);

  if (items) {
    items.quantity += item.quantity;
  } else {
    products.push(item);
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
};

export const removeProduct = (item) => {
  let products = dataProducts();
  const items = products.find((product) => product.productId === item.productId);

  if (items && items.quantity > 1) {
    items.quantity -= item.quantity;
  } else {
    products = products.filter((product) => product.productId !== item.productId);
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
};

export const removeItemCart = (id) => {
  const products = dataProducts();
  const newArrayProduct = products.length && products
    .filter((p) => p.productId !== parseInt(id, 10));
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(newArrayProduct));

  return dataProducts();
};

export const getTotal = () => {
  const products = dataProducts();

  if (!products.length > 0) return 0;

  const total = products.reduce((concat, item) => {
    const subtotal = concat + (item.unitPrice * item.quantity);

    return subtotal;
  }, 0);

  return total.toFixed(2);
};
