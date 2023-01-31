import "./App.scss";
import React, { useEffect, useState, useMemo } from "react";
// import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import Pagination from "./Components/Pagination";

let PageSize = 10;

function App() {
  const [pokemons, setPokemon] = useState({
    pokeItems: [],
    isDataLoaded: false,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //using two useEffects?
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((json) => {
        setPokemon({ pokeItems: json, isDataLoaded: true });
      });
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return (
      pokemons.pokeItems.results &&
      pokemons.pokeItems.results.slice(firstPageIndex, lastPageIndex)
    );
  }, [currentPage]);

  const ViewDetail = () => {
    return <Link to="./Components/DetailPage.js" />;
  };

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
        {currentTableData &&
          currentTableData.map((item, index) => {
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
                  <Button
                    href="./Components/DetailPage.js"
                    target="_self"
                    variant="outlined"
                    style={{ color: "white" }}
                  >
                    View Detail
                  </Button>
                </div>
              </div>
            );
          })}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={
            pokemons.pokeItems.results ? pokemons.pokeItems.results.length : 0
          }
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
export default App;
