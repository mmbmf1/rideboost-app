import React from "react";
import ReactDOM from "react-dom";
import Surge from "./Surge";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Surge />, div);
  ReactDOM.unmountComponentAtNode(div);
});
