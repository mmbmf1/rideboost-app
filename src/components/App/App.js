import React from "react";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import RideBoostContext from "../../RideBoostContext";
import Content from "../../content";

export default class App extends React.Component {
  static contextType = RideBoostContext;

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
