import React from "react";
import { useLocation, Link } from "react-router-dom";

function Result(props) {
  const location = useLocation();

  return (
    <div>
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
      {/* You have <span className="score">{location.state.score}</span> cuffs left{" "}
      <span className="name">{location.state.name}</span>!
      <p>Is this your best?</p> */}
      <Link to={{ pathname: "/home" }}>Try it again!</Link>
    </div>
  );
}

export default Result;
