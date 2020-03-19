import React from "react";
import Alerts from "./Alerts/Alerts";
import Weather from "./Weather/Weather";
import Events from "./Events/Events";
import Airline from "./Airline/Airline";

function Dashboard() {
  return (
    <div>
      <Alerts />
      <Weather />
      <Events />
      <Airline />
    </div>
  );
}

export default Dashboard;
