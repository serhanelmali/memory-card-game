import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

function Home() {
  const [name, setName] = useState("");
  return (
    <div className="general">
      <div className="home-container">
        {/* {name !== "" ? <p>{name}</p> : ""} */}
        <input
          onChange={(event) => setName({ name: event.target.value })}
          placeholder="Type your name"
        />
        <Link to={{ pathname: "/game", name: name }}>
          <p className="play-click">Find shooter!!</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
