import { useState, useContext, useEffect } from 'react';
import context from '../../context/index';
import styles from '../../styles/adm.module.css';
import { Button, Input, Select } from '..';
import getUsersByRole from '../../services/getApi';
import sendUser from '../../services/register.service';
import { validEmail, validPassword, validName } from '../../helper/validFields';

function ItemUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [erro, setErro] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const { setUsers } = useContext(context);

  // select tipo de usuario
  const typesUser = [
    {
      id: 1,
      name: 'customer',
    },
    {
      id: 1,
      name: 'seller',
    },
  ];

  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('customer');
  };

  const updateTableUsers = async () => {
    const customers = await getUsersByRole('user/customer') || [];
    const sellers = await getUsersByRole('user/seller') || [];
    const allUsers = [...customers, ...sellers];
    setUsers(allUsers);
  };

  const registerUser = async () => {
    if (!name || !email || !password || !role) {
      setErro('Preencha todos os campos');
      return;
    }

    const response = await sendUser({ name, email, password, role });

    if (response.error) {
      setErro(response.error);
      return;
    }
    setErro('Usuário cadastrado com sucesso !');
    clearFields();
    updateTableUsers();
  };

  useEffect(() => {
    function validate() {
      const minNumber = 6;
      const minName = 12;
      if (
        validEmail(email)
        && validPassword(password, minNumber)
        && validName(name, minName)) {
        // habilita o botao de login
        setButtonState(false);
        setErro();
        return;
      }

      setErro('Dados inválidos !');
      setButtonState(true);
    }
    validate();
  }, [name, email, password]);

  return (
    <section className={ styles.container_adm }>
      <div className={ styles.legend }>Cadastrar novo usuário</div>
      <section className={ styles.section_address }>

        <Input
          type="text"
          name=""
          label="Nome"
          onChange={ ({ target }) => setName(target.value) }
          value={ name }
          placeholder=""
          id="admin_manage__input-name"
        />
        <Input
          type="text"
          name=""
          label="Email"
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
          placeholder=""
          id="admin_manage__input-email"
        />

        <Input
          type="text"
          name=""
          label="Senha"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
          placeholder=""
          id="admin_manage__input-password"
        />

        <Select
          label="Tipo"
          onChange={ ({ target }) => setRole(target.value) }
          value={ role }
          name=""
          id="admin_manage__select-role"
          options={ typesUser }
          className={ styles.select }
          required
        />
        <Button
          typeButton="submit"
          label="Cadastrar"
          onClick={ () => registerUser() }
          disabled={ buttonState }
          id="admin_manage__button-register"
          className={ styles.btn_finish }
          src=""
        />

      </section>
      {erro ? (
        <span
          data-testid="admin_manage__element-invalid-register"
          className={ styles.error }
        >
          {erro}
        </span>
      ) : (
        ''
      )}
    </section>
  );
}

export default ItemUser;
