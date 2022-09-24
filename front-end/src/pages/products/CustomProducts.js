import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/group/Header';
import Quantity from '../../components/group/Quantity';
import useProducts from '../../hooks/useProduct';
import styles from '../../styles/products.module.css';

function CustomProducts() {
  //  const navigate = useNavigate();
  const [data] = useProducts('customer/products');

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
                {item.price}

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
    </section>
  );
}

export default CustomProducts;
