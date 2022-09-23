import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/header.module.css';
import { getNameUser } from '../../services/login.storage';
import { Button } from '..';

function Header() {
  const navigate = useNavigate();

  return (
    <nav className={ styles.header }>
      <Button
        label="PRODUTOS"
        type="button"
        id="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/products') }
      />
      <Button
        label="MEUS PEDIDOS"
        type="button"
        id="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/orders') }
      />
      <Button
        label={ getNameUser() || '' }
        type="button"
        id="customer_products__element-navbar-user-full-name"
        onClick={ () => navigate('/orders') }
      />
      <Button
        label="SAIR"
        type="button"
        id="customer_products__element-navbar-link-logout"
        onClick={ () => navigate('/logout') }
      />

    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showSearch: PropTypes.bool,
}.isRequired;

export default Header;
