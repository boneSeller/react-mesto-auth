import React from "react";
import logo from "../images/logo-w.svg";
import { Switch, Route, Link } from "react-router-dom";


function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
    <Switch>
      <Route  path='/sign-in'>
        <Link to='/sign-up' className="header__link">
          Регистрация
        </Link>
      </Route>  
      <Route  path='/sign-up'>
        <Link to='/sign-in' className="header__link">
          Войти
        </Link>
      </Route> 
      <Route  path="/">
          <div className="header__user-info">
           <p className="header__email">{props.email}</p>
          <Link to='/sign-in' className="header__link" onClick={props.onSignOut}>Выйти</Link>
          </div>          
        </Route>
    </Switch>  
    </header>
  );
}

export default Header;
