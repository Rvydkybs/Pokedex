import "./App.scss";
import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

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
    }
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#0C0A3E",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>
        <b>Pokedex</b>
      </h1>
      <div
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        {pokemons.pokeItems.results &&
          pokemons.pokeItems.results.map((item, index) => {
            return (
              <div
                style={{
                  margin: 15,
                  padding: 15,
                  width: 400,
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 12,
                  borderWidth: 2,
                  backgroundColor: "#3c6186",
                  borderColor: "#3c6186",
                  marginTop: 30,
                }}
              >
                <img
                  width={200}
                  height={200}
                  className="imageContainer"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "baseline",
                    flexDirection: "column",
                  }}
                >
                  <a style={{ margin: 20, fontSize: 25, color: "white" }}>
                    <b>{item.name}</b>
                  </a>
                  <Button variant="contained">View Detail</Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default App;
