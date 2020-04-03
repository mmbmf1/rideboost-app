import React from "react";
import ReactDOM from "react-dom";
import Airline from "./Airline";
import store from "../../../store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Airline arrivals={store.arrivals} departures={store.departures} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
