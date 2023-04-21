import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const EveryPokemon = ({ poki }) => {
  useEffect(() => {}, []);
  return (
    <NavLink to={`/pokemon/${poki.name}`}>
      <ul>
        <li>{poki.name}</li>
      </ul>
    </NavLink>
  );
};

export default EveryPokemon;
