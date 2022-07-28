import React from "react";
import { withRouter } from 'react-router-dom';

function Login(props) {

    const [values, setValues] = React.useState({});

    function handleChange(e) {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin( values.password, values.email );
    }
    

    return(
        <section className='register'>
            <h1 className="register__title">Вход</h1>
            <form onSubmit={handleSubmit}>

                <input 
                className="register__input"
                required
                autoComplete="on"
                name="password"
                type="password"
                minLength="5"
                maxLength="5"
                placeholder="Email" 
                onChange={handleChange}
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
                onChange={handleChange}
          />
          <span className="register__error register__error_visible name-error" />
                <button className="register__button">Войти</button>
            </form>
            
        </section>

    )
}


export default withRouter(Login);

