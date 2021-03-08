import React from "react";

export default function CurrentTemperature() {
  return (
    <>
      <h1 id="city">Sydney NSW, Australia</h1>
      <ul>
        <li id="date">Sunday, Jan 3</li>
        <li id="description">Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              id="icon"
              className="float-left"
            />
            <span className="temperature" id="temperature">
              19{" "}
            </span>
            <span className="units">
              <a href="#" id="celsius-link" className="active">
                ℃ /
              </a>
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
