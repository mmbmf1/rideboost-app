import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import Content from "../../content";

it("renders with out crashing", () => {
  const content = Content;
  const div = document.createElement("div");
  ReactDOM.render(<LandingPage content={content} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
