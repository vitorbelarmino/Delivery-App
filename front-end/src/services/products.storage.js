const DATA_PRODUCT = 'products';

export const dataProducts = () => (JSON.parse(localStorage.getItem(DATA_PRODUCT))) || [];

export const saveProducts = (item) => {
  const products = dataProducts();

  const items = products.find((product) => product.id === item.id);

  if (items) {
    items.qtd += item.qtd;
  } else {
    products.push(item);
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
};

export const removeProduct = (item) => {
  const products = dataProducts();
  const items = products.find((product) => product.id === item.id);

  if (items && items.qtd > 1) {
    items.qtd -= item.qtd;
  } else {
    items.qtd = 1;
  }
  localStorage.setItem(DATA_PRODUCT, JSON.stringify(products));
};

export const getTotal = () => {
  const products = dataProducts();
  const total = products.reduce((concat, item) => {
    const subtotal = concat + (item.price * item.qtd);

    return subtotal;
  }, 0);

  return total;
};
