import { useState, useEffect } from "react";
import "./App.css";
import styles from "./components/PokemonCard.module.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");
  useEffect(() => {
    alert("hello pokemon trainer:)");
  }, []);
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);
  if (pokemon == undefined) {
    throw new Error("Invalid pokemon name");
  }
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <NavBar pokemonList={pokemonList} setPokemonName={setPokemonName} />
    </div>
  );
}

export default App;
