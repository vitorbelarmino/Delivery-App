const DATA_PRODUCT = 'carrinho';

export const dataProducts = () => (JSON.parse(localStorage.getItem(DATA_PRODUCT))) || [];

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

  if (items && items.qtd > 1) {
    items.quantity -= item.quantity;
  } else {
    products = products.filter((product) => product.productId !== item.productId);
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
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
