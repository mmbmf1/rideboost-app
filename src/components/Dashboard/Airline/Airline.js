import React from "react";
import { convertDate } from "../../../app-helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneArrival,
  faPlaneDeparture
} from "@fortawesome/free-solid-svg-icons";

export default class Airline extends React.Component {
  render() {
    const arrivals = this.props.arrivals;
    const departures = this.props.departures;
    return (
      <div className="airline-container">
        <div className="dashboard-header">
          <FontAwesomeIcon icon={faPlaneArrival} />
          <h3>MCI</h3>
        </div>
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
                <td>
                  {a.status === "CanceledUncertain" ? "Canceled" : a.status}
                </td>
                <td>{convertDate(a.movement.scheduledTimeUtc)}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="dashboard-header">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <h3>MCI</h3>
        </div>
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
                <td>
                  {d.status === "CanceledUncertain" ? "Canceled" : d.status}
                </td>
                <td>{convertDate(d.movement.scheduledTimeUtc)}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
