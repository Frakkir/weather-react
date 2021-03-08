import React from "react";
import ForecastItem from "./ForecastItem";

export default function Forecast() {
  return (
    <div className="row weather-forecast" id="forecast">
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
            <ForecastItem />
    </div>
  );
}
