import React from "react";
// import Surge from "./Surge/Surge";
import Weather from "./Weather/Weather";
import Events from "./Events/Events";
import Airline from "./Airline/Airline";
import store from "../../store";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      store: store
    };
  }
  render() {
    // console.log(this.state);
    return (
      <div>
        {/* <Surge /> */}
        <Weather weather={this.state.store.weather} />
        <Airline
          arrivals={this.state.store.arrivals}
          departures={this.state.store.departures}
        />
        <Events events={this.state.store.events} />
      </div>
    );
  }
}
