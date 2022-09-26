import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import context from '../../context/index';
import styles from '../../styles/header.module.css';
import { getNameUser } from '../../services/login.storage';
import { Button } from '..';

function Header() {
  const navigate = useNavigate();
  const { activePage } = useContext(context);
  console.log();

  return (
    <nav className={ styles.header }>
      <Button
        label="PRODUTOS"
        type="button"
        id="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/products') }
        className=""
        addClass={ activePage === 'PRODUTOS' }
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

export default Header;
