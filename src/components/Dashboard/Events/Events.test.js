import React from "react";
import ReactDOM from "react-dom";
import Events from "./Events";
import store from "../../../store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events events={store.events} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
