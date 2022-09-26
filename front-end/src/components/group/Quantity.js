import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import context from '../../context/index';
import styles from '../../styles/products.module.css';
import {
  dataProducts,
  saveProducts,
  removeProduct,
} from '../../services/products.storage';

function Quantity({ id, name, price, url_image: image }) {
  const { setProducts } = useContext(context);
  const [quantity, setQuantity] = useState(0);

  const localProducts = dataProducts().find((p) => p.id === id);

  const item = {
    id,
    name,
    price,
    image,
    qtd: 1,

  };

  const changePlus = () => {
    setQuantity((prev) => prev + 1);
    saveProducts(item);
    setProducts(dataProducts);
  };

  const changeMinus = () => {
    setQuantity((prev) => {
      if (prev === 0) {
        prev = 0;
        return prev;
      }
      return prev - 1;
    });

    removeProduct(item);
    setProducts(dataProducts);
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
        { localProducts ? localProducts.qtd : quantity }

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
