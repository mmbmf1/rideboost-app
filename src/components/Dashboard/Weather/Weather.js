import React from "react";
import { convertTemp, convertDate } from "../../../app-helpers";

export default class Weather extends React.Component {
  render() {
    const currentWeather = this.props.currentWeather;
    const forecastWeather = this.props.forecastWeather;
    return (
      <div className="weather-container">
        <ul>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="current weather"
              className="weather-icon"
            />{" "}
            <p>{currentWeather.name}</p>
            <p className="temp-display">
              {convertTemp(currentWeather.main.temp)}
              {"\xB0"}F
            </p>
          </li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${forecastWeather.list[0].weather[0].icon}@2x.png`}
              alt="forecast weather"
              className="weather-icon"
            />
            <p>{convertDate(forecastWeather.list[0].dt_txt)}</p>
            <p className="temp-display">
              {convertTemp(forecastWeather.list[0].main.temp)}
              {"\xB0"}F
            </p>
          </li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${forecastWeather.list[1].weather[0].icon}@2x.png`}
              alt="forecast weather"
              className="weather-icon"
            />
            <p>{convertDate(forecastWeather.list[1].dt_txt)}</p>
            <p className="temp-display">
              {convertTemp(forecastWeather.list[1].main.temp)}
              {"\xB0"}F
            </p>
          </li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${forecastWeather.list[2].weather[0].icon}@2x.png`}
              alt="forecast weather"
              className="weather-icon"
            />
            <p>{convertDate(forecastWeather.list[2].dt_txt)}</p>
            <p className="temp-display">
              {convertTemp(forecastWeather.list[2].main.temp)}
              {"\xB0"}F
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
