import React from "react";

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
  }

  render() {
    return (
      <div>
        <p>Current Weather </p>
      </div>
    );
  }
}
