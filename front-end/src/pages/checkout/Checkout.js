import { useState, useEffect, useContext } from 'react';
import context from '../../context/index';

import Header from '../../components/group/Header';
import Address from '../../components/group/Address';
import converteEmReal from '../../helper/moneyConverter';

import styles from '../../styles/checkout.module.css';
import { getTotal, dataProducts, removeItemCart } from '../../services/products.storage';
import { Button } from '../../components';

function Checkout() {
  const { products, setProducts } = useContext(context);
  const [total, setTotal] = useState(0);

  const actionDelete = (id) => {
    const newArrayProducts = removeItemCart(id);
    setProducts(newArrayProducts);
  };

  useEffect(() => {
    const result = getTotal();
    setTotal(result);
    const localCart = dataProducts;
    setProducts(localCart);
  }, [products.length, setProducts]);

  return (

    <div className={ styles.checkout_container }>
      <Header />
      <div className={ styles.legend }>Finalizar Pedido</div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descricao</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0
              && products.map(({ productId,
                name,
                quantity,
                unitPrice,
              }, index) => (
                <tr key={ index }>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-item-number-${index}`
                    }
                  >
                    { index + 1 }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-name-${index}`
                    }
                  >
                    { name }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    { quantity }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                  >
                    { converteEmReal(unitPrice) }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    { converteEmReal(unitPrice * quantity) }
                  </td>
                  <td>
                    <Button
                      label="Remover"
                      onClick={ ({ target }) => actionDelete(target.value) }
                      disabled={ false }
                      id={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      className={ styles.btn_del }
                      value={ productId.toString() }
                    />
                  </td>
                </tr>
              ))
          }

        </tbody>
      </table>
      <div
        className={ styles.btnTotalItens }
        data-testid="customer_checkout__element-order-total-price"
      >
        <p>{converteEmReal(total)}</p>
      </div>
      <Address />
    </div>

  );
}

export default Checkout;
