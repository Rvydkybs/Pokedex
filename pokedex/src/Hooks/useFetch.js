import React, { useEffect, useState, useMemo } from "react";

export default function useFetch() {
  const [pokemons, setPokemon] = useState({
    pokeItems: [],
    isDataLoaded: false,
  });
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((json) => {
        setPokemon({ pokeItems: json, isDataLoaded: true });
      });
    console.log("deneme", pokemons.pokeItems);
  }, []);
  return pokemons;
}
