import React from "react";

export default class ArtistName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {attractionData: props.attractionList};
    console.log(this.state);
  }
  render() {
    return (
      <ul>{this.state.attractionData.map(function(attraction, i) {
          return (
            <li key={i}>{attraction.artist}</li>
          )
        })
      }
      </ul>
    )
  }
}
