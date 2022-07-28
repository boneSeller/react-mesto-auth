import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const editRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: editRef.current.value,
        });
      } 

    return (
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText={props.showLoading ? 'Сохранение...' : 'Сохранить'}
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
        >
          <input
            id="useravatar"
            name="avatar"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input"
            ref={editRef}
            required
          />
          <span className="popup__error  useravatar-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;