import React from "react";

export default class Events extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     events: {}
  //   };
  // }

  render() {
    const events = this.props.events.event;
    console.log(events);
    return (
      <div className="events-container">
        <h3>Upcoming Events</h3>
        {events.map((e, index) => (
          <div key={index} className="event">
            {/* replace empty p tag with stock image */}
            {e.image ? (
              <div className="event-img">
                <img src={`${e.image.thumb.url}`} alt="venue" />
              </div>
            ) : (
              <div className="stock-img"></div>
            )}
            {/* <h4>{e.title}</h4> */}
            <div className="event-info">
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                {e.title}
              </a>
              <p>{e.start_time}</p>
              {/* <p>{e.venue_name}</p> */}
              <a
                href={`http://maps.google.com/?q=${e.venue_name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {e.venue_name}
                {/* {e.venue_address}, {e.city_name}, {e.region_abbr}, {e.postal_code} */}
              </a>
            </div>
            {/* <a
              href={`http://maps.google.com/?q=${e.venue_address}, ${e.city_name}, ${e.region_abbr}, ${e.postal_code}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {e.venue_address}, {e.city_name}, {e.region_abbr}, {e.postal_code}
            </a> */}
          </div>
        ))}
      </div>
    );
  }
}
