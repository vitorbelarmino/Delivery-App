import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from '../../styles/products.module.css';

function Quantity({ id, name, price, url_image: image }) {
  const [quantity, setQuantity] = useState(0);

  const changePlus = () => {
    console.log(id);
    setQuantity((prev) => prev + 1);
  };

  const changeMinus = () => {
    setQuantity((prev) => {
      if (prev === 0) {
        console.log(prev);
        prev = 0;
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className={ styles.component_quantity }>

      <FaMinus
        className={ styles.btn_quantity_max }
        id={ id }
        data-testid="product-decrease-quantity"
        onClick={ () => changeMinus() }
      />
      <span
        data-testid="shopping-cart-product-quantity"
      >
        { quantity }

      </span>

      <FaPlus
        className={ styles.btn_quantity_min }
        data-testid="product-increase-quantity"
        id={ id }
        onClick={ () => changePlus() }
      />

    </div>
  );
}

Quantity.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Quantity;
