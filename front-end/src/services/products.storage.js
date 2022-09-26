const DATA_PRODUCT = 'carrinho';

export const dataProducts = () => (JSON.parse(localStorage.getItem(DATA_PRODUCT))) || [];

export const saveProducts = (item) => {
  const products = dataProducts();

  const items = products.find((product) => product.id === item.productId);

  if (items) {
    items.quantity += item.quantity;
  } else {
    products.push(item);
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
};

export const removeProduct = (item) => {
  const products = dataProducts();
  const items = products.find((product) => product.id === item.productId);

  if (items && items.qtd > 1) {
    items.quantity -= item.quantity;
  } else {
    items.quantity = 1;
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
};

export const getTotal = () => {
  const products = dataProducts();
  const total = products.reduce((concat, item) => {
    const subtotal = concat + (item.unitPrice * item.quantity);

    return subtotal;
  }, 0);

  return total.toFixed(2);
};
