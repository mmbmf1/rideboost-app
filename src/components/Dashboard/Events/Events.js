import React from "react";

export default class Events extends React.Component {
  //Find event stock image
  render() {
    const events = this.props.events.event;
    return (
      <div className="events-container">
        <h3>Upcoming Events</h3>
        {events.map((e, index) => (
          <div key={index} className="event">
            {e.image ? (
              <div className="event-img">
                <img src={`${e.image.thumb.url}`} alt="venue" />
              </div>
            ) : (
              <div className="stock-img"></div>
            )}
            <div className="event-info">
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                {e.title}
              </a>
              <p>{new Date(e.start_time).toLocaleTimeString()}</p>
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
