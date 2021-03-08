import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  return (
    <div className="home-container">
      <input
        onChange={(event) => setName({ name: event.target.value })}
        placeholder="Type your name"
      />
      <Link to={{ pathname: "/game", name: name }}>Arrest the shooters!!</Link>
    </div>
  );
}

export default Home;
