import React from "react";
import Surge from "./Surge/Surge";
import Weather from "./Weather/Weather";
import Events from "./Events/Events";
import Airline from "./Airline/Airline";

function Dashboard() {
  return (
    <div>
      <Surge />
      <Weather />
      <Events />
      <Airline />
    </div>
  );
}

export default Dashboard;
