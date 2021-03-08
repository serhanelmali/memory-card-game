import React from "react";
import { useLocation } from "react-router-dom";

function Result(props) {
  const location = useLocation();

  return <h1>{location.state.score}</h1>;
}

export default Result;
