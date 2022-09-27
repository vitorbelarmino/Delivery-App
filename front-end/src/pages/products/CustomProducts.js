import { useState, useEffect, useContext } from 'react';
import converteEmReal from '../../helper/moneyConverter';
import context from '../../context/index';

import Header from '../../components/group/Header';
import Quantity from '../../components/group/Quantity';
import useProducts from '../../hooks/useProduct';
import styles from '../../styles/products.module.css';
import { getTotal } from '../../services/products.storage';
import { Button } from '../../components';

function CustomProducts() {
  const [data] = useProducts('customer/products');
  const { products } = useContext(context);

  const [total, setTotal] = useState(1);

  useEffect(() => {
    const result = getTotal();
    setTotal(result);
  }, [products]);

  return (
    <section className={ styles.container_products }>
      <Header />
      <section className={ styles.card_container }>
        {
          data && data.map((item) => (
            <div
              key={ item.id }
              className={ styles.card }
              role="presentation"
            >
              <p
                data-testid={ `customer_products__element-card-price-${item.id}` }
              >
                {converteEmReal(item.price)}

              </p>
              <img
                src={ item.url_image }
                alt={ `${item.name}` }
                data-testid={ `customer_products__img-card-bg-image-${item.id}` }
                className={ styles.photo_product }
              />

              <section>
                <span className={ styles.div_quantity }>
                  <h4
                    data-testid={ `customer_products__element-card-title-${item.id}` }
                  >
                    {item.name}
                  </h4>
                </span>
                <Quantity
                  key={ item.id }
                  { ...item }
                />
              </section>
            </div>
          ))
        }
      </section>
      {/*  <Footer /> */}
      <button
        className={ styles.btnTotalItens }
        type="button"
        label=""
        data-testid="customer_products__checkout-bottom-value"
      >
        <p>{`${converteEmReal(total)}`}</p>
      </button>
    </section>
  );
}

export default CustomProducts;
