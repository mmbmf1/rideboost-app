import React from "react";

export default class Airline extends React.Component {
  //Move arrivals departures into components?
  //convert times function -> can this be shared with events and weather?
  //Lookup airport name by location - API
  render() {
    const arrivals = this.props.arrivals;
    const departures = this.props.departures;
    return (
      <div className="airline-container">
        <h3>MCI Arrivals</h3>
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
                <td>{a.number}</td>
                <td>{a.movement.airport.name}</td>
                <td>{a.status}</td>
                <td>
                  {new Date(a.movement.scheduledTimeUtc).toLocaleTimeString()}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <h3>MCI Departures</h3>
        <table>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight #</th>
              <th>To</th>
              <th>Status</th>
              <th>Scheduled Departure Time</th>
            </tr>
          </thead>
          {departures.map((d, index) => (
            <tbody key={index}>
              <tr>
                <td>{d.airline.name}</td>
                <td>{d.number}</td>
                <td>{d.movement.airport.name}</td>
                <td>{d.status}</td>
                <td>
                  {new Date(d.movement.scheduledTimeUtc).toLocaleTimeString()}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
