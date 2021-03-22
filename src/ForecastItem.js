import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./ForecastItem.css";

const codeMapping = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG"
  
};

function formatHours (timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

export default function ForecastItem ({forecast}) {

  let icon = codeMapping[forecast.weather[0].icon]
  return (
    
    <div className="col-2">
      <h3>
         {formatHours(forecast.dt * 1000)}
      </h3>
      <ReactAnimatedWeather
        icon={icon}
        color={"black"}
        size={25}
        animate={true}
      />
      <div className="weather-forecast-temperature">
        <strong>{Math.round(forecast.main.temp_max)}°</strong>{Math.round(forecast.main.temp_min)}°
      </div>
    </div>
  );
}
