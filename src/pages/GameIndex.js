import React, { useEffect, useState } from "react";
import axios from "axios";

// https://letsreact.org/how-to-fetch-data-from-json-files-in-react-and-display-it-in-a-component/

const GameIndex = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("/Mockdata.json")
    .then((response) => {
      setGames(response.data)
    })
    .catch((error) => {
        console.error("Error fetching games:", error)
    })
  }, [])

  return (
    <div>
      <h1>See our gaming selection</h1>
      <div>
        {games.map((game) => (
          <div key={game.id}>
            <h2>{game.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameIndex;
