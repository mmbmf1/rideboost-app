import React from "react";
import ReactDOM from "react-dom";
import Airline from "./Airline";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Airline />, div);
  ReactDOM.unmountComponentAtNode(div);
});
