import React from 'react';
import './Track.css';



class Track extends React.Component {
  constructor(props) {
    super(props)

  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);

  }

  render() {
    return (

      addTrack() = {this.props.onAdd{this.props.track}};
      removeTrack() = {this.props.onRemove{this.props.track}};


      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action"> <button name='button-add'
                                       value='add track'
                                       onClick={this.addTrack}> + </button>
                              <button name='button-remove'
                                      value='remove track'
                                      onClick={this.removeTrack}> - </button>
                              </a>
//orig text <a className="Track-action"><!-- + or - will go here --></a>

</div>
    )
  }
}

export default Track;
