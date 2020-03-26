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
      store: store
    };
  }

  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  //is just using return here ok?
  componentDidMount() {
    const user_id = TokenService.getUserId();
    if (user_id == null) {
      return;
    } else {
      UserApiService.getUserDashboard(user_id).then(response =>
        console.log(response)
      );
    }
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
