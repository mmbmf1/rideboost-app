import React from "react";

export default class Airline extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     arrivals: "",
  //     departures: ""
  //   };
  // }

  render() {
    const arrivals = this.props.arrivals.data;
    // console.log(arrivals);
    const departures = this.props.departures.data;
    // console.log(departures);
    return (
      <div>
        <h3>Airport Arrivals</h3>
        <table>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight #</th>
              <th>From</th>
              <th>Status</th>
              <th>Scheduled Arrival Time</th>
            </tr>
          </thead>
          {arrivals.map((a, index) => (
            <tbody key={index}>
              <tr>
                <td>{a.airline.name}</td>
                <td>{a.flight.number}</td>
                <td>{a.departure.airport}</td>
                <td>{a.flight_status}</td>
                <td>{a.arrival.scheduled}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <h3>Airport Departures</h3>
        <table>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight #</th>
              <th>To</th>
              <th>Status</th>
              <th>Scheduled Arrival Time</th>
            </tr>
          </thead>
          {departures.map((d, index) => (
            <tbody key={index}>
              <tr>
                <td>{d.airline.name}</td>
                <td>{d.flight.number}</td>
                <td>To: {d.arrival.airport}</td>
                <td>{d.flight_status}</td>
                <td>{d.departure.scheduled}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
