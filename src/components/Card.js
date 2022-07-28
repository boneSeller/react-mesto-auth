import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onTrashButton}) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
  `card__trash ${isOwn ? '' : 'card__trash-hidden'}`
    ); 

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${isLiked && 'card__like_active'}`; 

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onTrashButton(card);
  }

  return (
    <div className="card">
      <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <div className="card__description">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <div className="card__like__counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
