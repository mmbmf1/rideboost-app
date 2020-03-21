import React from "react";

export default class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      events: {}
    };
  }

  render() {
    return (
      <div>
        <p>Upcoming Events</p>
      </div>
    );
  }
}
