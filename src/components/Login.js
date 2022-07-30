import React from "react";
import { withRouter} from 'react-router-dom';


function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setpassword] = React.useState("");
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
      setpassword(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      props.onLogin(email, password);
    }

    return(
        <section className='register'>
            <h1 className="register__title">Вход</h1>
            <form onSubmit={handleSubmit}>

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
                <button className="register__button" type="submit">Войти</button>
            </form>
            
        </section>

    )
}


export default withRouter(Login);

