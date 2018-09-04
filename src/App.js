import React, { Component } from 'react';
import './App.css';
import ArtistContainer from './components/ArtistContainer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      albums: [],
      input: ''
    }
  }

  fetchArtist = (input) => {
    const baseURL = `https://itunes.apple.com/search?term=${input}&entity=album`
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => this.setState({
        albums: data.results
      }))
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSearch = () => {    
    this.fetchArtist(this.state.input)
  }

  render() {    
    return (
      <div className="App">
        <h1>Welcome to iTunes Artist Search!</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSearch} >Search!</button>
        <ArtistContainer albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
