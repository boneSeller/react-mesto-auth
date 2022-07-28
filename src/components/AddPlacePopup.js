import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({onAddPlace, isOpen, onClose, showLoading}) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name,
            link
        })
    }

    return (
        <PopupWithForm
          name="cards"
          title="Новое место"
          buttonText={showLoading ? 'Сохранение...' : 'Создать'}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input
            id="usertittle"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            placeholder="Название"
            className="popup__input"
            onChange={handleNameChange}
            value={name || ""}
            required
          />
          <span className="popup__error  usertittle-error" />
          <input
            id="userlink"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input"
            value={link || ""}
            required
            onChange={handleLinkChange}
          />
          <span className="popup__error  userlink-error" />
        </PopupWithForm>
    )
}

export default AddPlacePopup;