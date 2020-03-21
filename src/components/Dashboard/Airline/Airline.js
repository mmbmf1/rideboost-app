import React from "react";

export default class Airline extends React.Component {
  constructor() {
    super();
    this.state = {
      arrivals: "",
      departures: ""
    };
  }

  render() {
    return (
      <div>
        <p>Airport Arrivals</p>
        <p>Airport Departures</p>
      </div>
    );
  }
}
