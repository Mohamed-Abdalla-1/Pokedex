import React from "react";

const Logo = (props) => {
  return (
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </header>
  );
};

export default Logo;
