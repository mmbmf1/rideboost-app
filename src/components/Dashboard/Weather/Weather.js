import React from "react";

export default class Weather extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     weather: {}
  //   };
  // }

  render() {
    const weather = this.props.weather.data.map(d => d.weather);
    // console.log(weather);
    return (
      <div className="weather-container">
        <h3>Current Weather</h3>
        <ul>
          <li>
            <img
              src={`/icons/${weather[0].icon}.png`}
              alt="day 1 current weather icon"
              className="weather-icon"
            />
            <p>{weather[0].description}</p>
          </li>
          <li>
            <img
              src={`/icons/${weather[1].icon}.png`}
              alt="day 1 current weather icon"
            />
            <p>{weather[1].description}</p>
          </li>
          <li>
            <img
              src={`/icons/${weather[2].icon}.png`}
              alt="day 1 current weather icon"
            />
            <p>{weather[2].description}</p>
          </li>
        </ul>
      </div>
    );
  }
}
