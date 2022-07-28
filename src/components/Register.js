import React from "react";
import { Link, withRouter} from 'react-router-dom';


function Register(props) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, password);
  }

  return (
    <section className="register">
      <h1 className="register__title">Регистрация</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          className="register__input"
          required
          autoComplete="on"
          name="email"
          type="email"
          minLength="5"
          maxLength="40"
          placeholder="Email"
          value={email || ""}
          onChange={handleEmailChange}
        />
        <span className="register__error register__error_visible name-error" />
        <input
          className="register__input"
          required
          autoComplete="on"
          name="password"
          type="password"
          minLength="5"
          maxLength="40"
          placeholder="Пароль"
          value={password || ""}
          onChange={handlePasswordChange}
        />
        <span className="register__error register__error_visible name-error" />
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <div className="register__subtitle">
        <p className="register__subtitle_text">Уже зарегистрированы?</p>
        <Link to="/sign-in"  className="register__link">Войти</Link>
      </div>
    </section>
  );
}

export default withRouter(Register);
