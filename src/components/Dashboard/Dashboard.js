import React from "react";
import Weather from "./Weather/Weather";
import Events from "./Events/Events";
import Airline from "./Airline/Airline";
import store from "../../store";
import UserApiService from "../../services/user-api-service";
import TokenService from "../../services/token-service";
import { convertDate } from "../../app-helpers";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      store: store,
      location: "Kansas City",
      iata: "MCI",
      currentDate: "12:00 PM",
      futureDate: "1:00 PM",
      currentWeather: null,
      forecastWeather: null,
      arrivals: null,
      departures: null,
      events: null,
    };
  }

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    const user_id = TokenService.getUserId();
    if (user_id == null) {
      this.setState({
        currentWeather: store.currentWeather,
        forecastWeather: store.forecastWeather,
        arrivals: store.arrivals,
        departures: store.departures,
        events: store.events,
      });
    } else {
      UserApiService.getUserDashboard(user_id).then((response) => {
        console.log(response.data[6], response.data[7]);
        this.setState({
          location: response.data[4].city,
          currentWeather: response.data[0],
          forecastWeather: response.data[1],
          arrivals: response.data[2].arrivals,
          departures: response.data[2].departures,
          events: response.data[3].events,
          iata: response.data[5],
          currentDate: convertDate(response.data[6]),
          futureDate: convertDate(response.data[7]),
        });
      });
    }
  }

  render() {
    return (
      <div>
        {/* <h3>{this.state.location}</h3> */}
        {this.state.currentWeather && (
          <Weather
            currentWeather={this.state.currentWeather}
            forecastWeather={this.state.forecastWeather}
          />
        )}
        {this.state.arrivals && this.state.departures && (
          <Airline
            arrivals={this.state.arrivals}
            departures={this.state.departures}
            iata={this.state.iata}
            currentDate={this.state.currentDate}
            futureDate={this.state.futureDate}
          />
        )}
        {this.state.events && <Events events={this.state.events} />}
      </div>
    );
  }
}
