import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/group/Header';
import useProducts from '../../hooks/useProduct';
import styles from '../../styles/login.module.css';

function CustomProducts() {
  const navigate = useNavigate();
  const [data] = useProducts('customer/products');

  return (
    <section className={ styles.container_products }>
      <Header />
      <section className={ styles.card_container }>
        {
          data && data.map(({ url, name }, index) => (
            <div
              key={ index }
              className={ styles.card }
              data-testid={ `${index}-ingredient-card` }
              role="presentation"
              onClick={ () => {
                navigate('/foods');
              } }
            >
              <img
                src={ url }
                alt={ `${strIngredient}` }
                data-testid={ `${index}-card-img` }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                {name}
              </h3>
            </div>
          ))
        }
      </section>
      {/*  <Footer /> */}
    </section>
  );
}

export default CustomProducts;
