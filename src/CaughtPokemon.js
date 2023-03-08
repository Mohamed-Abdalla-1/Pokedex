import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  function catchPokemon() {
    // const pokes = ["Eevee", "a", "e", "3"];
    // let poke = pokes[Math.floor(Math.random() * pokes.length)];
    pokemonNameInput && setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      {caught.map((x) => (
        <li key={x}>{x}</li>
      ))}
      <input
        type={"text"}
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </>
  );
};

export default CaughtPokemon;
