import React from 'react';


const PokemonListItem = ({ pokeman }) => (
  <div className="pokemonItem">
    <div>Name: {pokeman.name}</div>
    <div>Id: {pokeman.id}</div>
    <img src={pokeman.sprites.front_default} alt="pokemon image" />
  </div>
)

export default PokemonListItem;