import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Redirect, useHistory, useLocation } from "react-router-dom";

import "./CardGame.scss";

import { get, shuffle } from "lodash";

import cartman from "./../../assets/cartman.png";
import clyde from "./../../assets/clyde.png";
import jimmy from "./../../assets/jimmy.png";
import kenny from "./../../assets/kenny.png";
import kyle from "./../../assets/kyle.png";
import stan from "./../../assets/stan.png";
import thad from "./../../assets/thad.png";
import tweek from "./../../assets/tweek.png";

function CardGame() {
  const history = useHistory();

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
  const [score, setScore] = useState([8]);
  const location = useLocation();
  const [chars, setChars] = useState([]);

  //Shuffles Cards.
  useEffect(() => setShuffledCards(shuffle(cards)), []);

  //Transfers flippedCards to matchedCards if they matches,
  //if they don't then their open condition turns to false,
  //so that add closed class to the shuffledCard's item by finding it from it's id,
  //and changes score by minus 1

  useEffect(() => {
    if (flippedCards.length > 1 && flippedCards.length < 3) {
      let matches = matchedCards;

      if (
        flippedCards[0].name === flippedCards[1].name &&
        flippedCards[0].id !== flippedCards[1].id &&
        !matches.includes(flippedCards[0].name || flippedCards[1].name)
      ) {
        setMatchedCards([...matchedCards, flippedCards[0], flippedCards[1]]);
        let transferCards = shuffledCards;
        transferCards.find(
          (item) => item.id === flippedCards[0].id
        ).open = true;
        transferCards.find(
          (item) => item.id === flippedCards[1].id
        ).open = true;
        transferCards.find(
          (item) => item.id === flippedCards[0].id
        ).isMatched = true;
        transferCards.find(
          (item) => item.id === flippedCards[1].id
        ).isMatched = true;
      } else if (flippedCards[0].name !== flippedCards[1].name) {
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
      }, 800);
    }
  }, [flippedCards]);

  //Gets us to result page by checking score and matchedCards count also sends data to that pages.

  useEffect(() => {
    if (score === 0) {
      return history.push({
        pathname: "/result",
        state: { score: score, name: location.name },
      });
    }
  }, [score]);

  useEffect(() => {
    if (matchedCards.length === 16) {
      return history.push({
        pathname: "/result",
        state: { score: score, name: location.name },
      });
    }
  }, [matchedCards]);

  useEffect(() => {
    let transferCards = shuffledCards;
    if (matchedCards.length > 0 && transferCards) {
      transferCards.find(
        (item) => item.id === matchedCards[matchedCards.length - 2].id
      ).open = true;
      transferCards.find(
        (item) => item.id === matchedCards[matchedCards.length - 1].id
      ).open = true;
    }
  }, [matchedCards]);

  return (
    <div>
      <div className="container">
        <p className="score">You have {score} cuffs left!</p>
        <div className="card-container">
          {shuffledCards.map((character, index) => (
            <Card
              key={index}
              onClickHandler={() => {
                if (
                  flippedCards.length < 2 &&
                  !character.isMatched &&
                  !character.open
                ) {
                  setFlippedCards([...flippedCards, { ...character }]);
                  character.open = true;
                }
              }}
              character={character}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGame;
