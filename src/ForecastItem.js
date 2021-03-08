import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function formatHours(time) {}

export default function ForecastItem() {
  return (
    <div className="col-2">
      <h3>
        {/* {formatHours(forecast.dt * 1000)} */}
        03:00
      </h3>
      <ReactAnimatedWeather
        icon={"CLEAR_DAY"}
        color={"black"}
        size={25}
        animate={true}
      />
      <div className="weather-forecast-temperature">
        {/* <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}° */}
      </div>
    </div>
  );
}