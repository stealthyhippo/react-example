import React from "react";

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eventdates: props.dates};
    console.log(this.state);
  }
  render() {
    return (
      <div>{this.state.eventdates.startdate}</div>
    )
  }
}
