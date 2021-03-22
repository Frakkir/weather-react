import { useState } from "react";
import './App.css';
import Search from './Search';
import CurrentTemperature from './CurrentTemperature';
import HumidityWind from './HumidityWind';
import Forecast from './Forecast';
import Footer from './Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App () {
   let [city, setCity] = useState("");
    let [weather, setWeather] = useState({temperature:0});

  return (
     <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <h1>
              Search weather by city
            </h1>
          <Search setCity={setCity} setWeather={setWeather} />
          {city &&
            <>
          <CurrentTemperature city={city} weather={weather} />
          <HumidityWind humidity={weather.humidity} wind={weather.wind}/>
            <Forecast city={city} />
          </>}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
