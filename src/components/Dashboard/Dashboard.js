import React from "react";
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
    return (
      <div>
        <Weather
          currentWeather={this.state.store.currentWeather}
          forecastWeather={this.state.store.forecastWeather}
        />
        <Airline
          arrivals={this.state.store.arrivals}
          departures={this.state.store.departures}
        />
        <Events events={this.state.store.events} />
      </div>
    );
  }
}
