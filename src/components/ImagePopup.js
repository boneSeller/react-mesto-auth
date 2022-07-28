import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section
      id="popup-image"
      className={`popup popup_image ${card.link ? `popup_opened` : ''}`}
    >
      <div className="popup__body">
        <div className="popup__container">
          <button
            className="popup__close popup__close_image"
            type="button"
            onClick={onClose}
          ></button>
          <img className="popup__image" src={card.link} alt={card.name} />
          <h2 className="popup__text">{card.name}</h2>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
