import "./App.scss";
import React, { useEffect, useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Pagination from "./Components/Pagination";
import NoResult from "../src/Components/NoResult";

let PageSize = 10;
var index,
  indexList = [];

function App() {
  const [pokemons, setPokemon] = useState({
    pokeItems: [],
    isDataLoaded: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((json) => {
        setPokemon({ pokeItems: json, isDataLoaded: true });
      });
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    index =
      pokemons.pokeItems.results &&
      pokemons.pokeItems.results.slice(firstPageIndex, lastPageIndex);
    index &&
      index.map((item, index) => {
        indexList.push(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.slice(
            34,
            36
          )}.png`
        );
      });

    return (
      pokemons.pokeItems.results &&
      pokemons.pokeItems.results.slice(firstPageIndex, lastPageIndex)
    );
  }, [currentPage]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `http://localhost:3000/Components/DetailPage.js`;
    navigate(path);
  };

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData =
    inputText === ""
      ? currentTableData
      : pokemons.pokeItems.results &&
        pokemons.pokeItems.results.filter((el) => {
          return el.name.toLowerCase().includes(inputText);
        });

  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        flex: 1,
        minHeight: window.innerHeight + 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>
        <b>Pokedex</b>
      </h1>

      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={inputHandler}
        />
      </div>
      <div
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item, index) => {
            const linkContent = indexList[index]; //for loop to array at the same time
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
                  src={linkContent}
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
                    onClick={() => {
                      routeChange();
                    }}
                  >
                    View Detail
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <NoResult />
        )}
        {inputText.length > 0 ? (
          ""
        ) : (
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={
              pokemons.pokeItems.results ? pokemons.pokeItems.results.length : 0
            }
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}
export default App;
