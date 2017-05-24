import React from "react";
import ArtistName from "../../attraction/ArtistName";
import Dates from "../event_date/Dates";

export default class EventInfo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {data: data};
    }

  render() {
    return (
      <ul>{this.state.data.map(function(item, i) {
          return (
            <li key={i}>{item.eventid}
              <ArtistName attractionList={item.attractionList} />
              <span key={i}>{item.prices.pricedisplay}</span>
              <Dates dates={item.dates}/>
            </li>
          )
        })
      }
      </ul>
    )
  }
}
