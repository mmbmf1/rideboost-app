import React from "react";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import Content from "../../content";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: Content
    };
  }

  render() {
    const content = this.state.content;
    return (
      <div>
        <Header content={content} />
        <LandingPage content={content} />
      </div>
    );
  }
}
