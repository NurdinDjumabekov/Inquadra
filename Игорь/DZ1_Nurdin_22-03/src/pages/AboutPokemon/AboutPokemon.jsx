import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutPokemon = () => {
  const [pokiUrl, setPokiUrl] = useState("");
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${name}
      `
      )
      .then((response) =>
        setPokiUrl(response.data.sprites.other.dream_world.front_default)
      );
  }, []);
  return (
    <div>
      <img src={pokiUrl} alt="pokemon" />
    </div>
  );
};

export default AboutPokemon;
