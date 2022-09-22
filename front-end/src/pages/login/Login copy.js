import { useState } from 'react';
import styles from '../../styles/login.module.css';

const form = {
  login: '',
  senha: '',
  error: false,
};

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

export default function Login() {
  const [values, setValues] = useState(form);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const verify = verifyEmail(values.login);
    const seis = 6;
    console.log(verify);

    if (values.senha.length < seis || !verify) {
      setValues({
        ...values,
        error: true,
      });
    }
    setValues({
      ...values,
      error: false,
    });
  };

  return (
    <main>
      <section>
        <img src="logo" alt="logo" />
      </section>

      <section>
        <label htmlFor="login">
          Login
          <input
            type="text"
            data-testid="common_login__input-email"
            name="login"
            value={ values.login }
            onChange={ (e) => handleInputChange(e) }
          />
        </label>

        <label htmlFor="senha">
          Senha
          <input
            type="text"
            name="senha"
            data-testid="common_login__input-password"
            value={ values.senha }
            onChange={ (e) => handleInputChange(e) }
          />
        </label>

        <button
          onClick={ (e) => handleSubmitBtn(e) }
          type="button"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>

        <button type="button" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </section>
      {values.error ? (
        <span data-testid="common_login__element-invalid-email">
          Email ou senha inválidos.
        </span>
      ) : (
        ''
      )}
    </main>
  );
}
