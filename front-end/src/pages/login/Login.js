import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/login.module.css';
import { Button, Input } from '../../components';
// rota de acesso à rota
import loginService from '../../services/login.service';
// funcao para validar o e-mail
import { validEmail, validPassword } from '../../helper/validFields';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [buttonState, setButtonState] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginService(
      {
        email,
        password,
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
      if (validEmail(email) && validPassword(password, minNumber)) {
        // habilita o botao de login
        setButtonState(false);
        return;
      }

      setButtonState(true);
    }
    validate();
  }, [email, password]);

  return (
    <main className={ styles.main_container }>

      <form
        onSubmit={ handleSubmit }
        className={ styles.form_login }
      >

        <section>
          <h1>NOME APP</h1>
          <Input
            label="Login"
            type="text"
            value={ email }
            id="common_login__input-email"
            name="login"
            className={ styles.form_input }
            onChange={ ({ target }) => setEmail(target.value) }
          />

          <Input
            label="Senha"
            type="password"
            value={ password }
            name="senha"
            id="common_login__input-password"
            className={ styles.form_input }
            onChange={ ({ target }) => setPassword(target.value) }
          />

          <Button
            label="LOGIN"
            typeButton="submit"
            id="common_login__button-login"
            disabled={ buttonState }
            onClick={ () => {} }
          />

          <Button
            label="Ainda não tenho conta"
            id="common_login__button-register"
            onClick={ () => navigate('/register') }
          />

        </section>

        {erro ? (
          <span
            data-testid="common_login__element-invalid-email"
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
