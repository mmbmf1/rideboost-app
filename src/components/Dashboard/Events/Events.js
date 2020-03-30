import React from "react";
import { convertDate } from "../../../app-helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default class Events extends React.Component {
  render() {
    const events = this.props.events.event;
    return (
      <div className="events-container">
        <div className="dashboard-header">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <h3>Upcoming Events</h3>
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
              <p>{convertDate(e.start_time)}</p>
              <a
                href={`http://maps.google.com/?q=${e.venue_name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {e.venue_name}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
