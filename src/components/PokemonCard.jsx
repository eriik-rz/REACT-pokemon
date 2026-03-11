import "./PokemonCard.css";
import { useEffect, useState } from "react"

function PokemonCard(props) { // le llegan los props
  
  // props
  const {pokemon, selectPokemon} = props;

  return (
    pokemon.id ? (
      // onclick para llamar a la funcion del prop con el mismo pokemon de la lista
      <li className="pokemon-card" onClick={() => selectPokemon(pokemon)}>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt="pokemon" className="pokemon-img"></img>
        <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
      </li>
    ) : (
      <h3>No existe</h3>
    )
  );
}

export default PokemonCard