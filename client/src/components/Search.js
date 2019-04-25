import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange = (e) => {
    let query = e.target.value;
    this.setState({ query: query }, () => console.log(this.state)); //check the console to see how this.state changes
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.getPokemon(this.state.query);
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Add Pokemon</button>
        </form>
      </div>
    )
  }
}

export default Search;