import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/address.module.css';
import { Button, Input, Select } from '..';
import getSellersApi from '../../services/getApi';
import { dataProducts, getTotal } from '../../services/products.storage';
import { dataUser } from '../../services/login.storage';
import context from '../../context';

function Address() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [dbSellers, setDbSellers] = useState('');
  const [number, setNumber] = useState('');
  const { pathname } = useLocation();
  const { setPostOrder } = useContext(context);
  const [value, setValue] = useState();

  const saveAddress = () => {
    if (seller || !address || !number) {
      console.log('vazio');
      return;
    }
    setPostOrder(value);
  };

  useEffect(() => {
    const order = {
      products: dataProducts(),
      userName: dataUser().data.name,
      SellerName: seller,
      price: getTotal(),
      address,
      number,
    };
    setValue(order);
  }, [seller, address, number]);

  useEffect((() => {
    const request = async () => {
      if (pathname === '/customer/checkout') {
        const data = await getSellersApi('/user/seller');
        setDbSellers(data);
      }
      const data = await getSellersApi('customer/products');

      if (data.length) {
        setSeller(data[0].name);
        setDbSellers(data);
      }
    };
    request();
    // setOrder();
  }), [pathname]);

  return (
    <section className={ styles.container_address }>
      <div className={ styles.legend }>Detalhes e Endereço para Entrega</div>
      <section className={ styles.section_address }>

        <Select
          label="Vend(a) Resp."
          onChange={ ({ target }) => setSeller(target.value) }
          value={ seller }
          defaultValue="currency"
          name="seller"
          id="customer_checkout__select-seller"
          options={ dbSellers.length ? dbSellers : [{}] }
          className={ styles.select }
          required
        />
        <div>
          <Input
            type="text"
            name=""
            label="Endereço"
            onChange={ ({ target }) => setAddress(target.value) }
            value={ address }
            placeholder=""
            id="customer_checkout__input-address"
          />
          <Button
            typeButton="submit"
            label="Finalizar Pedido"
            onClick={ () => saveAddress() }
            disabled={ false }
            id="customer_checkout__button-submit-order"
            className={ styles.btn_finish }
          />
        </div>
        <Input
          type="text"
          name=""
          label="Número"
          onChange={ ({ target }) => setNumber(target.value) }
          value={ number }
          placeholder=""
          id="customer_checkout__input-address-number"
        />
      </section>
    </section>
  );
}

export default Address;
