import React from 'react';

import './App.css';

import Spotify from '../../util/Spotify';

const playlistName = '';
const playlistTracks = [
  name,
  artist,
  album,
  id];



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state.searchResults = {
      name: '',
      artist: '',
      album:'',
      id:''
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);


  };

  async search(term) {
    const results = await Spotify.search(term);
    this.setState({searchResults: results});
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id))
    { return '';
  } else { return this.props.addTrack(track);
      this.state.playlistTracks.push(track);
      this.setState({track: this.state.playlistTracks})};
  }

   removeTrack(track) {
    this.setState(prevState => ({track: prevState.playlistTracks.filter(track => playlistTrack.id !== track.id )}))
   }

   updatePlaylistName(name) {this.setState(value: [name])}

   savePlaylist() {
		Spotify.savePlaylist(this.state.playlistName, trackURIs);
		this.setState({playlistName: 'New Playlist', playlistTracks: []});
	}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <div className= "SearchResults" searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <div className="Playlist" playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks.bind(this)}
            onRemove={this.removeTrack()}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist} />









          </div>
        </div>
      </div>
    );
  }
}

export default App;
