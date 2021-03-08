import React from "react";

export default function HumidityWind() {
  return (
    <div className="col-6">
      <ul>
        <li>
          Humidity: <span id="humidity">77</span>%
        </li>
        <li>
          Wind: <span id="windSpeed">8</span> km/h
        </li>
      </ul>
    </div>
  );
}
