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
          <Search setCity={setCity} setWeather={setWeather} />
          <CurrentTemperature city={city} weather={weather} />
          <HumidityWind />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
