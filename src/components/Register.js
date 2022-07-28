import React from "react";
import { Link, withRouter} from 'react-router-dom';

function Register(props) {
  return (
    <section className="register">
      <h1 className="register__title">Регистрация</h1>
      <form>
        <input
          className="register__input"
          required
          autoComplete="on"
          name="password"
          type="password"
          minLength="5"
          maxLength="5"
          placeholder="Email"
        />
        <span className="register__error register__error_visible name-error" />
        <input
          className="register__input"
          required
          autoComplete="on"
          name="password"
          type="password"
          minLength="5"
          maxLength="5"
          placeholder="Пароль"
        />
        <span className="register__error register__error_visible name-error" />
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <div className="register__subtitle">
        <p>Уже зарегистрированы?</p>
        <Link to="/register"  className="login__subtitle_enter">Войти</Link>
      </div>
    </section>
  );
}

export default withRouter(Register);
