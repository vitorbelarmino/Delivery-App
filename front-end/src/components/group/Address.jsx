import { useState, useEffect } from 'react';
import styles from '../../styles/address.module.css';
import { Button, Input, Select } from '..';
import getSellersApi from '../../services/getApi';

function Address() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [dbSellers, setDbSellers] = useState('');
  const [number, setNumber] = useState('');

  const saveAddress = () => {
    if (!seller || !address || !number) {
      console.log('vazio');
      return;
    }

    console.log(seller);
    console.log('salvou');
  };

  useEffect((() => {
    const request = async () => {
      const data = await getSellersApi('customer/products');

      if (data.length) {
        setSeller(data[0].name);
        setDbSellers(data);
      }
    };
    request();
  }), []);

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
