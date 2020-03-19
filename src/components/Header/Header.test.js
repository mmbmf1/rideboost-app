import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Content from "../../content";

it("renders without crashing", () => {
  const content = Content;
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Header content={content} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
