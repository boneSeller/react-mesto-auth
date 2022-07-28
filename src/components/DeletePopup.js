import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onCardDelete(props.card);
    }

    return (
        <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonText={props.showLoading ? 'Удаление...' : 'Да'}
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      /> 
    )
}

export default DeletePopup;