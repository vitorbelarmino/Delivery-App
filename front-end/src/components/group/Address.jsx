import styles from '../../styles/address.module.css';
import { Button, Input } from '..';

function Address() {
  return (
    <section className={ styles.container_address }>
      <Input
        type="text"
        name=""
        label="Vendedor(a) Responsável"
        onChange={ () => {} }
        value=""
        placeholder=""
        id=""
      />
    </section>
  );
}

export default Address;
