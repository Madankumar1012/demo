import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [data, setdata] = useState([]);
  let [players, setplayers] = useState([]);
  let getteamindiafromserver = async () => {
    let reqOptions = {
      method: "GET",
    };

    let JSONData = await fetch("http://localhost:2001/teamindia", reqOptions);
    let JSOData = await JSONData.json();
    setdata(JSOData);
    console.log(JSOData);
  };

  let getteamenglandfromserver = async () => {
    let reqOptions = {
      method: "GET",
    };

    let JSONData = await fetch("http://localhost:2001/teamengland", reqOptions);

    let JSOData = await JSONData.json();
    setdata(JSOData);
  };
  let getplayersfromserver = async () => {
    let reqOptions = {
      method: "GET",
    };

    let JSONData = await fetch("http://localhost:2001/players", reqOptions);

    let JSOData = await JSONData.json();

    setplayers(JSOData);
    console.log(JSOData);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          getteamindiafromserver();
        }}>
        get team india
      </button>
      <button
        onClick={() => {
          getteamenglandfromserver();
        }}>
        get teamengland
      </button>
      <button
        onClick={() => {
          getplayersfromserver();
        }}>
        get players
      </button>
      {data.map((ele) => {
        return <h1>{ele}</h1>;
      })}
      {players.map((player) => {
        return (
          <div>
            <img src={player.pic}></img>
            <h1>{player.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
