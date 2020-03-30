import React from "react";
import Weather from "./Weather/Weather";
import Events from "./Events/Events";
import Airline from "./Airline/Airline";
import store from "../../store";
import UserApiService from "../../services/user-api-service";
import TokenService from "../../services/token-service";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      store: store,
      currentWeather: null,
      forecastWeather: "",
      events: null
    };
  }

  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  componentDidMount() {
    const user_id = TokenService.getUserId();
    if (user_id == null) {
      this.setState({
        currentWeather: store.currentWeather,
        forecastWeather: store.forecastWeather,
        events: store.events
      });
    } else {
      UserApiService.getUserDashboard(user_id).then(response => {
        // console.log(response.data[2].events.event);
        this.setState({
          currentWeather: response.data[0],
          forecastWeather: response.data[1],
          events: response.data[2].events
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Insert Location Here</h3>
        {this.state.currentWeather && (
          <Weather
            currentWeather={this.state.currentWeather}
            forecastWeather={this.state.forecastWeather}
          />
        )}
        <Airline
          arrivals={this.state.store.arrivals}
          departures={this.state.store.departures}
        />
        {this.state.events && <Events events={this.state.events} />}
      </div>
    );
  }
}
