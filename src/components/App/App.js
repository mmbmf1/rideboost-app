import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import RideBoostContext from "../../RideBoostContext";

export default class App extends React.Component {
  static contextType = RideBoostContext;

  render() {
    return <LandingPage />;
  }
}
