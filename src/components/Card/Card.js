import React from "react";

import officer from "./../../assets/officer.png";
import "./card.scss";

function Card({ character, onClickHandler }) {
  return (
    <div className="card">
      <img
        className={character.open ? "card-open" : "card-closed"}
        onClick={onClickHandler}
        src={character.open ? character.image : officer}
        alt={character.name}
      ></img>
    </div>
  );
}

export default Card;
