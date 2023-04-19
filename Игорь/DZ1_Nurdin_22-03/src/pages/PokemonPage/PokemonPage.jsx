import axios from "axios";
import React, { useEffect, useState } from "react";
import EveryPokemon from "../../components/EveryPokemon/EveryPokemon";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setPokemon(response.data.results));
  }, []);
  return (
    <div>
      {pokemon.map((poki, index) => (
        <EveryPokemon poki={poki} key={index} />
      ))}
    </div>
  );
};

export default PokemonPage;
