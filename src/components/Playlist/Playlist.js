import React from 'react';
import './Playlist.css';
import '../TrackList/TrackList.js';



class Playlist extends React.Component {
  constructor(props) {
    super(props);

  this.handleNameChange = this.handleNameChange.bind(this);

  };



  //onRemove = removeTrack()

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div className="Playlist">
  <input defaultValue={'New Playlist'}
  input type="text"
  value={this.state.value}
  onChange={this.handleNameChange} />

  <div className="TrackList" tracks={this.props.playlistTracks}
                             onRemove={{this.props.onRemove} =>{
                             isRemoval={true}}}/>
  <a className="Playlist-save"
   onClick={this.props.onSave}
  >SAVE TO SPOTIFY</a>

</div>
    )
  }
}

export default Playlist;
