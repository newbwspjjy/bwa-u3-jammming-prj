import React from 'react';
import './SearchResults.css';



class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults" >
    <h2>Results</h2>
    <div className="TrackList" tracks = {this.props.searchResults}
        onAdd={this.addTrack}
        isRemoval = {false}>


  </div>
    )
  }
}

export default SearchResults;
