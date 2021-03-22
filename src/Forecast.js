import React, {useEffect, useState } from "react";
import ForecastItem from "./ForecastItem";


import axios from "axios";
import "./ForecastItem.css";

export default function Forecast (props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse (response) {
    setForecast(response.data.list.splice(0,6))
    setLoaded(true);
  }
  
  useEffect(() => {
let apiKey = "f1f501c888b4b930b3a7e076cecf3a88";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    
  }, [props.city]);

  if (!loaded)  {
    return null;
    }
  return (
    <div className="row weather-forecast" id="forecast">
      {forecast.map(f => (<ForecastItem forecast={f}/>))}
    </div>
  );
}
