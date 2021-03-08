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

  return (
     <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <Search city={city} setCity={setCity}/>
          <CurrentTemperature />
          <HumidityWind />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
