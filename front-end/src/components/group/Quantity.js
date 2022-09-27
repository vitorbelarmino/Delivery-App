import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import { FaPlus, FaMinus } from 'react-icons/fa';
import context from '../../context/index';
import styles from '../../styles/products.module.css';
import {
  dataProducts,
  addProducts,
  removeProduct,
} from '../../services/products.storage';
import Button from '../Button';

function Quantity({ id, name, price /* url_image: image */ }) {
  const { setProducts } = useContext(context);
  const [quantity, setQuantity] = useState(0);

  const localProducts = dataProducts.length && dataProducts().find((p) => p.id === id);

  const item = {
    productId: id,
    name,
    unitPrice: price,
    quantity: 1,

  };

  const changePlus = () => {
    setQuantity((prev) => prev + 1);
    addProducts(item);
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

      <Button
        type="button"
        label="-"
        className={ styles.btn_quantity_max }
        id={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => changeMinus() }
      />
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ localProducts ? localProducts.qtd : quantity }
        onChange={ () => {} }
      />

      <Button
        type="button"
        label="+"
        className={ styles.btn_quantity_min }
        id={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => changePlus() }
      />

    </div>
  );
}

Quantity.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Quantity;
