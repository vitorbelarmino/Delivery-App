import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/address.module.css';
import { Button, Input, Select } from '..';
import getSellersApi from '../../services/getApi';
import { dataProducts, getTotal } from '../../services/products.storage';
import { dataUser } from '../../services/login.storage';
import context from '../../context';
import saveOrder from '../../services/order.service';

function Address() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [dbSellers, setDbSellers] = useState('');
  const [number, setNumber] = useState('');
  const { postOrder, setPostOrder } = useContext(context);

  const navigate = useNavigate();

  const saveAddress = async () => {
    if (!seller || !address || !number) {
      console.log('Informe os dados do Endereço');
      return;
    }

    const result = await saveOrder(postOrder);

    if (result.id !== undefined) {
      navigate(`/customer/orders/${result.id}`);
    }
  };

  useEffect(() => {
    const order = {
      products: dataProducts()
        .map(({ productId, quantity }) => ({ productId, quantity })),
      userName: dataUser().name,
      SellerName: seller,
      price: getTotal(),
      address,
      number,
    };
    setPostOrder(order);
  }, [seller, address, number, setPostOrder]);

  useEffect((() => {
    const request = async () => {
      const data = await getSellersApi('user/seller');
      setDbSellers(data);

      if (data.length) {
        // salvei numa constante, porque direto não salvava
        const nameSeller = data[0].name;
        setSeller(nameSeller);
        setDbSellers(data);
      }
    };
    request();
  }), [seller]);

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
            src=""
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
