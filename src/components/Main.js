import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__container">
              <img className="profile__avatar" alt="аватар" src={currentUser.avatar} />
              <button
                className="profile__change"
                onClick={props.onEditAvatar}
              ></button>
            </div>
            <div className="profile__description">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit"
                type="button"
                onClick={props.onEditProfile}
              ></button>
              <p className="profile__job">{currentUser.about}</p>
            </div>
          </div>
          <button
            className="profile__button"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section className="elements">
          {props.cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onTrashButton={props.onTrashButton}/>
          ))}
        </section>
      </main>
  );
}

export default Main;
