import React from "react";
import { convertDate } from "../../../app-helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneArrival,
  faPlaneDeparture,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default class Airline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: "",
      isRotated: "",
    };
  }

  handleClick = (e, status) => {
    this.setState({
      isToggleOn: this.state.isToggleOn === status ? "" : status,
      isRotated: this.state.isRotated === status ? "" : status,
    });
  };

  render() {
    const arrivals = this.props.arrivals;
    const departures = this.props.departures;
    return (
      <div className="airline-container">
        <div className="arrival-container">
          <div className="dashboard-header">
            <FontAwesomeIcon icon={faPlaneArrival} />
            <p>
              {this.props.currentDate} - {this.props.futureDate}
              <br />
              <span className="flight-count">{arrivals.length} Flights</span>
            </p>
            <h4>{this.props.iata}</h4>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chev-rotate-${this.state.isRotated === "arrivals"}`}
              onClick={(e) => this.handleClick(e, "arrivals")}
            />
          </div>
          <table
            className={`table-display-${this.state.isToggleOn === "arrivals"}`}
          >
            <thead>
              <tr>
                <th>Airline</th>
                <th>Flight #</th>
                <th>From</th>
                <th>Status</th>
                <th>Time</th>
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
        </div>
        <div className="departure-container">
          <div className="dashboard-header">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <p>
              {this.props.currentDate} - {this.props.futureDate}
              <br />
              <span className="flight-count">{departures.length} Flights</span>
            </p>
            <h4>{this.props.iata}</h4>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chev-rotate-${this.state.isRotated === "departures"}`}
              onClick={(e) => this.handleClick(e, "departures")}
            />
          </div>
          <table
            className={`table-display-${
              this.state.isToggleOn === "departures"
            }`}
          >
            <thead>
              <tr>
                <th>Airline</th>
                <th>Flight #</th>
                <th>To</th>
                <th>Status</th>
                <th>Time</th>
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
      </div>
    );
  }
}
