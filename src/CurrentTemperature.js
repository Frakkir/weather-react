import React, {useState, useEffect} from "react";

export default function CurrentTemperature ({ city, weather }) {
  let today = new Date();

  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][today.getDay()];
  
  let hours = today.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    let months = [
  "Jan",
  "Fab",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
  let month = months[today.getMonth()];

    
 
  let [temp, setTemp] = useState(weather.temperature);
  let [isC, setIsC] = useState(true);

  useEffect(() => {
    setTemp(Math.round(weather.temperature));
  }, [weather]);

  function displayFahrenheitTemperature (event) {
    event.preventDefault()
    let fahrenheitTemperature = Math.round((weather.temperature * 9) / 5 + 32);
    setTemp(fahrenheitTemperature);
    setIsC(false);
  }

  function displayCelsiusTemperature (event) {
    event.preventDefault()
    setTemp (Math.round(weather.temperature));
    setIsC(true);
  }
  
  return (
    <>
      <h1 id="city">{city}</h1>
      <ul>
        <li id="date">{day}, {month} {today.getDate()}, {hours}:{minutes}</li>
        <li id="description">{weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-6" >
          <div className="clearfix weather-temperature">
            <img
              src={weather.icon}
              alt={weather.description}
              id="icon"
              className="float-left"
            />
            <span className="temperature" id="temperature">
              {temp}
            </span>
            <span className="units">
              <a href="/" className={isC ? "active":"" } onClick={displayCelsiusTemperature}>
                ℃ /
              </a>
              <a href="/"  className={!isC ? "active":"" } onClick={displayFahrenheitTemperature}>
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
