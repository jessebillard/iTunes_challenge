import React, { Component } from 'react';
import './App.css';
import ArtistContainer from './components/ArtistContainer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      albums: [],
      input: '',
      alertMessage: ''
    }
  }

  fetchArtist = (input) => {
    const baseURL = `https://itunes.apple.com/search?term=${input}&entity=album`
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        if (data.resultCount) {
          this.setState({
            albums: data.results,
            alertMessage: ''
          })
        } else {
            this.setState({
              alertMessage: `There don't appear to be any artists by the name of ${input}. Plz try again!`,
              albums: []
            })
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSearch = () => {    
    this.fetchArtist(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {  
    const { albums } = this.state  
    // console.log(albums)
    return (
      <div className="App">
        <h1>Welcome to iTunes Artist Search!</h1>
        <input placeholder="Artist Name" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleSearch} >Search</button>
        <br />
        { albums.length ? <h4>Albums by {albums[0].artistName}</h4> : ''}
        { this.state.alertMessage ? <h3>{this.state.alertMessage}</h3> : ''}
        <ArtistContainer albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
