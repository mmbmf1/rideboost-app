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
    // console.log(events);
    return (
      <div>
        <h3>Upcoming Events</h3>
        {events.map((e, index) => (
          <div key={index}>
            {/* replace empty p tag with stock image */}
            {e.image ? (
              <img src={`${e.image.small.url}`} alt="venue" />
            ) : (
              <p></p>
            )}
            <h4>{e.title}</h4>
            <a href={e.url} target="_blank" rel="noopener noreferrer">
              Link to more Info
            </a>
            <p>Starts: {e.start_time}</p>
            <p>{e.venue_name}</p>
            <a
              href={`http://maps.google.com/?q=${e.venue_name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {e.venue_address}, {e.city_name}, {e.region_abbr}, {e.postal_code}
            </a>
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
