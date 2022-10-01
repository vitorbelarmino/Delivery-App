import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import context from '../../context/index';
import styles from '../../styles/header.module.css';
import { getNameUser, dataUser } from '../../services/login.storage';
import redirection from '../../helper/redirection';
import { Button } from '..';

function Header({ labelNav }) {
  const navigate = useNavigate();
  const { role } = dataUser() || '';
  const { activePage } = useContext(context);

  const goTo = redirection(dataUser().role);

  return (
    <nav className={ styles.header }>
      <Button
        label={ labelNav }
        typeButton="button"
        id="customer_products__element-navbar-link-products"
        onClick={ () => navigate(goTo) }
        className=""
        addClass={ activePage === 'PRODUTOS' }
      />
      <Button
        label={ role === 'customer' ? 'MEUS PEDIDOS' : '' }
        typeButton="button"
        id="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/orders') }
        disabled={ role !== 'customer' }
      />
      <Button
        label={ getNameUser() || '' }
        typeButton="button"
        id="customer_products__element-navbar-user-full-name"
        onClick={ () => {} }
        disabled

      />
      <Button
        label="SAIR"
        typeButton="button"
        id="customer_products__element-navbar-link-logout"
        onClick={ () => { localStorage.clear('user'); navigate('/login'); } }
      />

    </nav>
  );
}

Header.propTypes = {
  labelNav: PropTypes.string.isRequired,
};

export default Header;
