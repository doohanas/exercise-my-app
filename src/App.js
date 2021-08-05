import React, { useState } from "react";
import Title from "./components/title/title";
import Gif from "./components/gif/index";
import axios from "axios";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);

  const getText = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${searchValue}&limit=12`
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
        <Title />
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <button onClick={getText}> search </button>
        {result.map((gif) => (
          <Gif key={gif.id} url={gif.images.original.url} title={gif.title} />
        ))}
      </div>
    </>
  );
}

export default App;
