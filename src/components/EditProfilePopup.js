import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, props.isOpen]); 

      function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description,
        });
      }

      function handleNameChange(e) {
        setName(e.target.value);
      }

      function handleDescriptionChange(e) {
        setDescription(e.target.value);
      }  
      
      return (
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={props.isOpen}
          onClose={props.onClose}
          buttonText={props.showLoading ? 'Сохранение...' : 'Сохранить'}
          onSubmit={handleSubmit}
        >
          <input
            required
            id="username"
            name="name"
            type="text"
            minLength="2"
            maxLength="40"
            className="popup__input"
            placeholder="Имя"
            onChange={handleNameChange}
            value={name || ""} 
          />
          <span className="popup__error  username-error" />
          <input
            required
            id="userjob"
            name="about"
            type="text"
            minLength="2"
            maxLength="200"
            className="popup__input"
            placeholder="Профессиональная деятельность"
            onChange={handleDescriptionChange}
            value={name || ""} 
          />
          <span className="popup__error  userjob-error" />
        </PopupWithForm>
      )
}

export default EditProfilePopup;