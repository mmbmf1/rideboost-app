import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import store from "../../../store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Weather
      currentWeather={store.currentWeather}
      forecastWeather={store.forecastWeather}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
