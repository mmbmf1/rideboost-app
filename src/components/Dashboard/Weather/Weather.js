import React from "react";

export default class Weather extends React.Component {
  render() {
    const currentWeather = this.props.currentWeather;
    const forecastWeather = this.props.forecastWeather;
    //convert Math.round & new dates into functions
    return (
      <div className="weather-container">
        <ul>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="current weather"
              className="weather-icon"
            />
            <p>
              {Math.round(currentWeather.main.temp * (9 / 5) - 459.67)}
              {"\xB0"}F
            </p>
            <p>{currentWeather.name}</p>
          </li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${forecastWeather.list[0].weather[0].icon}@2x.png`}
              alt="forecast weather"
              className="weather-icon"
            />
            <p>
              {Math.round(forecastWeather.list[0].main.temp * (9 / 5) - 459.67)}
              {"\xB0"}F
            </p>
            <p>
              {new Date(forecastWeather.list[0].dt_txt).toLocaleTimeString()}
            </p>
          </li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${forecastWeather.list[1].weather[0].icon}@2x.png`}
              alt="forecast weather"
              className="weather-icon"
            />
            <p>
              {Math.round(forecastWeather.list[1].main.temp * (9 / 5) - 459.67)}
              {"\xB0"}F
            </p>
            <p>
              {new Date(forecastWeather.list[1].dt_txt).toLocaleTimeString()}
            </p>
          </li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${forecastWeather.list[2].weather[0].icon}@2x.png`}
              alt="forecast weather"
              className="weather-icon"
            />
            <p>
              {Math.round(forecastWeather.list[2].main.temp * (9 / 5) - 459.67)}
              {"\xB0"}F
            </p>
            <p>
              {new Date(forecastWeather.list[2].dt_txt).toLocaleTimeString()}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
