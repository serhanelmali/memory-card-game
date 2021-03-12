import React from "react";

import officer from "./../../assets/officer.png";
import "./card.scss";

function Card({ character, onClickHandler, flippedCards }) {
  return (
    <div className={character.isMatched ? "card-matched" : "card"}>
      <img
        className={!character.open ? "card-closed" : "card-open"}
        onClick={onClickHandler}
        src={character.open ? character.image : officer}
        alt={character.name}
      ></img>
    </div>
  );
}

export default Card;
