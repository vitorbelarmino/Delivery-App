import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import context from '.';
import '../App.css';

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const contextValue = useMemo(() => (
    {
      products, setProducts,
    }), [products, setProducts]);

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
