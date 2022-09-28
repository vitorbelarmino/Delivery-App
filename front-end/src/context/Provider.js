import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import context from '.';
import '../App.css';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [activePage, setActivePage] = useState('PRODUTOS');

  const contextValue = useMemo(() => (
    {
      products,
      setProducts,
      activePage,
      setActivePage,
      sellers,
      setSellers,
    }), [products, setProducts, activePage, setActivePage, sellers, setSellers]);

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
