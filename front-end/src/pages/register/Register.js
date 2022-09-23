import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/login.module.css';
import { Button, Input } from '../../components';
// rota de acesso à rota
import loginService from '../../services/register.service';
// funcao para validar o e-mail
import { validEmail, validPassword, validName } from '../../helper/validFields';

export default function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [buttonState, setButtonState] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginService(
      {
        name: nome,
        email,
        password,
        role: 'customer',
      },
    ).then((response) => {
      if (response.error) {
        setErro(response.error);
      } else {
        setErro();
        navigate('/customer/products');
      }
    });
  };

  useEffect(() => {
    function validate() {
      const minNumber = 6;
      const minName = 12;
      if (
        validEmail(email)
        && validPassword(password, minNumber)
        && validName(nome, minName)) {
        // habilita o botao de login
        setButtonState(false);
        return;
      }

      setButtonState(true);
    }
    validate();
  }, [nome, email, password]);

  return (
    <main className={ styles.main_container }>

      <form
        onSubmit={ handleSubmit }
        className={ styles.form_login }
      >

        <section>
          <h1>Cadastro</h1>

          <Input
            label="Nome"
            type="text"
            value={ nome }
            id="common_register__input-name"
            name="login"
            onChange={ ({ target }) => setNome(target.value) }
          />

          <Input
            label="Email"
            type="text"
            value={ email }
            id="common_register__input-email"
            name="login"
            onChange={ ({ target }) => setEmail(target.value) }
          />

          <Input
            label="Senha"
            type="password"
            value={ password }
            name="senha"
            id="common_register__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />

          <Button
            label="CADASTRAR"
            typeButton="submit"
            id="common_register__button-register"
            disabled={ buttonState }
            onClick={ () => {} }
          />

        </section>

        {erro ? (
          <span
            data-testid="common_register__element-invalid_register"
            className={ styles.erro_login }
          >
            {erro}
          </span>
        ) : (
          ''
        )}

      </form>
    </main>
  );
}
