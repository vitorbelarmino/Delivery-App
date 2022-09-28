import { useState, useEffect } from 'react';
import styles from '../../styles/address.module.css';
// import useProducts from '../../hooks/useProduct';
import { Button, Input, Select } from '..';

function Address() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {

  }, []);

  return (
    <section className={ styles.container_address }>
      <div className={ styles.legend }>Detalhes e Endereço para Entrega</div>
      <section className={ styles.section_address }>

        <Select
          label="Vend(a) Resp."
          onChange={ ({ target }) => setSeller(target.id) }
          value={ seller }
          name=""
          id=""
          options={ [{ id: 1, name: 'fabiano' }] }
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
            id=""
          />
          <Button
            label="Finalizar Pedido"
            onClick={ () => {} }
            disabled={ false }
            id="customer_checkout__element-order-table-remove"
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
          id=""
        />
      </section>
    </section>
  );
}

export default Address;
