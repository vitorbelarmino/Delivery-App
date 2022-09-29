import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import context from '.';
import '../App.css';
// import { dataProducts, getTotal } from '../services/products.storage';
// import { dataUser } from '../services/login.storage';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState('PRODUTOS');
  const [postOrder, setPostOrder] = useState();

  const contextValue = useMemo(() => (
    {
      products,
      setProducts,
      activePage,
      setActivePage,
      postOrder,
      setPostOrder,
    }), [products, setProducts, activePage, setActivePage, postOrder, setPostOrder]);

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;

export default Provider;
