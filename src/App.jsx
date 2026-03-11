import './App.css'
import { useState } from 'react'
import PokemonDetails from './components/PokemonDetails'
import PokemonList from './components/PokemonList'

function App() {

  // variable reactiva para que pueda cambiar el pokemon
  const [selectedPokemon, setSelectedPokemon] = useState()
  
  return (
    <>
    {selectedPokemon && ( // si pokemon seleccionado true mostramos
      <div>
        <h2>Pokemon Seleccionado</h2>
        {/*pasamos el pokemon seleccionado y si no existe no se renderiza*/}
        <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
      </div>
    )}

    <h2>Lista de Pokemons</h2>

  <PokemonList selectPokemon={setSelectedPokemon}></PokemonList>
    </>
  )
}

export default App
