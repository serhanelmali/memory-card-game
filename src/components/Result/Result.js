import React from "react";
import { useLocation, Link } from "react-router-dom";

function Result(props) {
  const location = useLocation();

  return (
    <div>
      You have <span className="score">{location.state.score}</span> cuffs left{" "}
      <span className="name">{location.state.name}</span>!
      <p>Is this your best?</p>
      <Link to={{ pathname: "/home" }}>Try it again!</Link>
    </div>
  );
}

export default Result;
