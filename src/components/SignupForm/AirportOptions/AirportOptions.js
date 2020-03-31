import React from "react";
import RideboostContext from "../../../contexts/RideBoostContext";

export default class AiportOptions extends React.Component {
  static contextType = RideboostContext;
  render() {
    const airports = this.context.airports;
    return (
      <div>
        <label htmlFor="airports">Choose a home airport:</label>
        <input type="text" name="airports" list="airports" />
        <datalist id="airports" name="airports">
          {airports.map((airport, index) => (
            <option key={index} value={airport.ICAO}>
              {airport.Airport === null ? "" : airport.Airport}
            </option>
          ))}
        </datalist>
      </div>
    );
  }
}
