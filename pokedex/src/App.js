import "./App.css";
import React, { useEffect, useState } from "react";

const { name, url } = "https://pokeapi.co/api/v2/pokemon?limit=150";
let pokemonIndex = "";

function App() {
  const [pokemons, setPokemon] = useState({
    pokeItems: [],
    isDataLoaded: false,
    pokemonIndex: "",
  });
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((json) => {
        setPokemon({ pokeItems: json, isDataLoaded: true });
      });
    pokemonIndex = "https://pokeapi.co/api/v2/pokemon?limit=150".split("/")[
      "https://pokeapi.co/api/v2/pokemon?limit=150".split("/").length - 2
    ];
    {
      console.log("fkkkkkkkkkkkkkkkkkkkkkkkk", pokemonIndex);
    }
  }, []);
  console.log("first", pokemons);
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {pokemons.pokeItems.results &&
        pokemons.pokeItems.results.map((item, index) => {
          return (
            <div className="container">
              <div className="textContainer">
                <a style={{ backgroundColor: "blue" }}>{item.name}</a>
              </div>
              <div className="imageContainer">
                <img
                  style={{ backgroundColor: "pink" }}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
