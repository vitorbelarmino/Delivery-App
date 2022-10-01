import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import CustomProducts from './pages/products/CustomProducts';
import Checkout from './pages/checkout/Checkout';
import Orders from './pages/orders/Orders';
import SellerOrdersDetails from './pages/sellerOrdersDetails/SellerOrdersDetails';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <CustomProducts /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders/:id" element={ <Orders /> } />
      <Route exact path="/seller/orders/:id" element={ <SellerOrdersDetails /> } />

    </Routes>

  );
}

export default App;
