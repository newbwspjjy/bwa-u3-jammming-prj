import React from 'react';
import './TrackList.css';



class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList"
      {this.props.tracks.map(track => {
          return {track.id}
      })
    } />

        <div className="Track" onAdd={this.props.onAdd}
          onRemove={this.props.onRemove} =>{
          isRemoval={true}} />

        <h2>{this.props.track.name}</h2>
        </div>
        <div className="Artist">
        <p>{this.props.track.artist}</p>
        </div>
        <div className="Album">
        <p>{this.props.track.album}</p>
        </div>
        </div>




  </div>
    )
  }
}

export default TrackList;


//orig text <!-- You will add a map method that renders a set of Track components  -->
