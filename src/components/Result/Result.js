import React from "react";
import "./Result.scss";
import { useLocation, Link } from "react-router-dom";

function Result(props) {
  const location = useLocation();

  return (
    <div className="result__container">
      {location.state.score > 0 ? (
        <p className="win__quote">
          You did it! Everyone respects your autoritah.
          <p>
            And you got {location.state.score} cuffs left {location.state.name},
            nice job!
          </p>
        </p>
      ) : (
        <p>You're out off cuffs {location.state.name}!</p>
      )}

      <Link to={{ pathname: "/home" }}>Try it again!</Link>
    </div>
  );
}

export default Result;
