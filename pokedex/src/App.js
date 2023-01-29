import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemon] = useState({
    pokeItems: [],
    isDataLoaded: false,
  });
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((json) => {
        setPokemon({ pokeItems: json, isDataLoaded: true });
      })
      .then((data) => console.log("data", data));
  }, []);
  console.log("first", pokemons);
  return (
    <div className="App">
      <body>
        <a>fd</a>
      </body>
    </div>
  );
}

export default App;
