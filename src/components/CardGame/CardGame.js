import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./CardGame.scss";

import { shuffle } from "lodash";

import cartman from "./../../assets/cartman.png";
import clyde from "./../../assets/clyde.png";
import jimmy from "./../../assets/jimmy.png";
import kenny from "./../../assets/kenny.png";
import kyle from "./../../assets/kyle.png";
import stan from "./../../assets/stan.png";
import thad from "./../../assets/thad.png";
import tweek from "./../../assets/tweek.png";

function CardGame() {
  const [cards] = useState([
    { name: "cartman", open: false, id: 1, image: cartman, isMatched: false },
    { name: "clyde", open: false, id: 2, image: clyde, isMatched: false },
    { name: "jimmy", open: false, id: 3, image: jimmy, isMatched: false },
    { name: "kenny", open: false, id: 4, image: kenny, isMatched: false },
    { name: "kyle", open: false, id: 5, image: kyle, isMatched: false },
    { name: "stan", open: false, id: 6, image: stan, isMatched: false },
    { name: "thad", open: false, id: 7, image: thad, isMatched: false },
    { name: "tweek", open: false, id: 8, image: tweek, isMatched: false },
    { name: "cartman", open: false, id: 9, image: cartman, isMatched: false },
    { name: "clyde", open: false, id: 10, image: clyde, isMatched: false },
    { name: "jimmy", open: false, id: 11, image: jimmy, isMatched: false },
    { name: "kenny", open: false, id: 12, image: kenny, isMatched: false },
    { name: "kyle", open: false, id: 13, image: kyle, isMatched: false },
    { name: "stan", open: false, id: 14, image: stan, isMatched: false },
    { name: "thad", open: false, id: 15, image: thad, isMatched: false },
    { name: "tweek", open: false, id: 16, image: tweek, isMatched: false },
  ]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState([20]);

  useEffect(() => setShuffledCards(shuffle(cards)), []);

  useEffect(() => {
    if (flippedCards.length > 1) {
      if (flippedCards[0].name === flippedCards[1].name) {
        setMatchedCards([...matchedCards, flippedCards[0], flippedCards[1]]);
      } else {
        setTimeout(() => {
          let transferCards = shuffledCards;
          transferCards.find(
            (item) => item.id === flippedCards[0].id
          ).open = false;
          transferCards.find(
            (item) => item.id === flippedCards[1].id
          ).open = false;
        });
        setScore(score - 1);
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  useEffect(() => {}, [score]);

  return (
    <div className="card-container">
      {shuffledCards.map((character, index) => (
        <Card
          key={index}
          onClickHandler={() => {
            setFlippedCards([...flippedCards, { ...character }]);
            character.open = true;
          }}
          character={character}
        />
      ))}
    </div>
  );
}

export default CardGame;
