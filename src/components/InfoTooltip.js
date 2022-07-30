import React from "react";
import Fail from '../images/fail.svg'
import Success from '../images/succsess.svg'

function InfoTooltip({ isOpen, onClose, isSuccess  }) {
 
  return (
    
    <section className={`popup ${isOpen && 'popup_opened'}`}>
        <div className="popup__content">
          <button className="popup__close" type="button" onClick={onClose}></button>
          <div className="popup__form">
            <img src={`${isSuccess ? Success : Fail}`} className="popup__image_tooltip" />
            <h2 className="popup__tooltip">{isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
          </div>
      </div>

    </section>

  );
}
  
export default InfoTooltip;
