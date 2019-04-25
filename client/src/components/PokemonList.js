import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = (props) => (
<div id="pokemonList">
{props.pokemon.map((pokeman, i) => 
  <PokemonListItem pokeman={pokeman} key={i}/> 
  )}
</div>
)



export default PokemonList;