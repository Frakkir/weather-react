import React, { useState } from "react";
import axios from "axios";

export default function Search({ setCity, setWeather }) {
  let [localCity, setlocalCity] = useState("");
    
  function handleSubmit(event) {
    event.preventDefault();
    setCity(localCity);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${localCity}&appid=f1f501c888b4b930b3a7e076cecf3a88&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather (response) {  
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function updateCity(event) {
    setlocalCity(event.target.value);
  }

    return (
      <div>
         <form className="weather-app" id="search-form" onSubmit={handleSubmit}>
          <div className="search-form">
            
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            autofocus="on"
            autocomplete="off"
                  id="city-input"
                  className="form-control shadow-sm"
                  onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm"
          />
        </div>
      </div>
    </div>
  </form>
      </div>
    );
}
