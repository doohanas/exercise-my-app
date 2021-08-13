import React, { useState } from "react";
import Gif from "./components/gif/index";
import axios from "axios";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const React_API = process.env.REACT_APP_API_KEY;

  const getText = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${React_API}&q=${searchValue}&limit=12`
      )
      .then((response) => {
        console.log(response);
        setResult(response.data.data);
      });
  };

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="App">
        <input
          data-testid="input"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <button data-testid="buttonSearch" onClick={getText}> search </button>
        {result.map((gif) => (
          <Gif key={gif.id} url={gif.images.original.url} title={gif.title} />
        ))}
      </div>
    </>
  );
}

export default App;
