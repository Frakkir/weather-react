import React from "react";
import axios from 'axios';


export default function Weather (props) {
    
    function handleResponse (response) {
        
    }
    let apiKey = "f1f501c888b4b930b3a7e076cecf3a88";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <h2>Hello from weather</h2>;

}