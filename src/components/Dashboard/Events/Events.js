import React from "react";
import { convertDate } from "../../../app-helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default class Events extends React.Component {
  render() {
    const events = this.props.events.event;
    return (
      <div className="events-container">
        <div className="dashboard-header">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <h3>Events</h3>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
        {events.map((e, index) => (
          <div key={index} className="event">
            {e.image ? (
              <div className="event-img">
                <img src={`${e.image.thumb.url}`} alt="venue" />
              </div>
            ) : (
              <div className="stock-img">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            )}
            <div className="event-info">
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                {e.title}
              </a>
              <p>
                <FontAwesomeIcon icon={faClock} />
                {convertDate(e.start_time)}
              </p>
              <a
                href={`http://maps.google.com/?q=${e.venue_name},${e.venue_address},${e.city_name}, ${e.region_abbr}, ${e.postal_code}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {e.venue_name}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
