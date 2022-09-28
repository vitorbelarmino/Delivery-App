import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import context from '.';
import '../App.css';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState('PRODUTOS');

  const contextValue = useMemo(() => (
    {
      products,
      setProducts,
      activePage,
      setActivePage,
    }), [products, setProducts, activePage, setActivePage]);

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
