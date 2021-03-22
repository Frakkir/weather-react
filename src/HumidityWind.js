import React from "react";

export default function HumidityWind ({ humidity, wind }) {
  
  return (
    <div className="col-6">
      <ul>
        <li>
          Humidity: <span id="humidity">{humidity}</span>%
        </li>
        <li>
          Wind: <span id="windSpeed">{Math.round(wind)}</span> km/h
        </li>
      </ul>
    </div>
  );
}
