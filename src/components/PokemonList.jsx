import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import GetForm from "./GetForm";

function PokemonList(props) { // recibe props
  const [pokemons, setPokemons] = useState([]) // variable reactiva

  // useEffect para llamar al principio a la funcion con la cantidad que queremos
  useEffect(() => {
    getPokemons(1, 9);
  }, [])

  // funcion para devolver un pokemon por su id
  const fetchPokemon = async (index) => {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
    const datos = await respuesta.json();
    return datos;
  }

  // funcion para devolver un array con el numero de pokemons
  const getPokemons = async (from, to) => {
    const pkmnArr = [];

    for (let i = from; i <= to;  i++){
      const pokemon = await fetchPokemon(i);
      pkmnArr.push(pokemon)
    }

    // setPokemons para modificar la variable reactiva igualandola al array
    setPokemons(pkmnArr)
  }

  const pokemonCards = pokemons.map((pokemon) => {
    // key unica y enviamos props
    return <PokemonCard 
            key={pokemon.id} 
            pokemon={pokemon} 
            selectPokemon={props.selectPokemon}>
          </PokemonCard> 
  })

  return (
    <div>
      <GetForm getPokemons={getPokemons}></GetForm>

      <ul className="pokemon-list">
        {pokemonCards}
      </ul>
    </div>
  )
}

export default PokemonList