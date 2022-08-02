import "./styles.css";
import React, { useState } from "react";

const songsList = {
  Romantic: [{ name: "Perfect" }, { name: "I just called" }],
  Workout: [{ name: "Let it go" }, { name: "Venom" }],
  Devotional: [{ name: "Oceans" }, { name: "Chattan" }]
};
const songs = Object.keys(songsList);

export default function App() {
  const [genre, setGenre] = useState("Romantic");
  // const [song, setSong] = useState("");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>My Favourite Songs</h1>
      <h3>Select a genre to get started.</h3>
      {songs.map((genre) => (
        <button
          key={songs}
          onClick={() => genreClickHandler(genre)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer",
            background: "#b97283",
            color: "#0d213d",
            border: "1px solid black",
            margin: "1rem 0.3rem"
          }}
        >
          {genre}
        </button>
      ))}

      <div>
        <ul>
          {songsList[genre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div> {song.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
