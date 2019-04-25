import React from 'react';
import PokemonList from './PokemonList';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    }
  }

componentDidMount () {
  this.setState({pokemon: this.props.pokemon}, () => console.log(this.state));
}

getPokemon = (query) => {
  this.props.getPokemon(query, ({ data }) => { //query is what to search, and (data) is what gets displayed
    //upon success
    console.log(data);
    let { id, name, sprites } = data;
    /*
    let id = data.id
    let name = data.name
    let sprites = data.sprites
    */
    //make copy of state array
    let copy = this.state.pokemon.slice();
    //add to that array
    copy.push({ id, name, sprites});
    this.setState({ pokemon: copy })
  })
}

  render() {
    return (
<div>
  <Search getPokemon={this.getPokemon}/>
  <PokemonList pokemon={this.state.pokemon}/>
</div>
    )
    //this.getPokemon gets different things from this.props.getPokemon (this one is passed down)
  }
}


export default App;