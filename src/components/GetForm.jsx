import { useState } from "react";

function GetForm(props) {

  const [from, setFrom] = useState(1); // desde por defecto
  const [to, setTo] = useState(10); // hasta por defecto

  const handleFromInput = (e) => {
    setFrom(e.target.value);
  }

  const handleToInput = (e) => {
    setTo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(from, to);
    props.getPokemons(from, to);
  }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="from-pokemon">From: </label>
        <input type="number" id="from-pokemon" min={1} onChange={handleFromInput}></input>
      </fieldset>

      <fieldset>
        <label htmlFor="to-pokemon">From: </label>
        <input type="number" id="to-pokemon" min={1} onChange={handleToInput}></input>
      </fieldset>

      <button>Get Pokemon</button>
    </form>
  )
}

export default GetForm