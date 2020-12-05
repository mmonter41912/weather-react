import React from "react";
import axios from "axios";

export default function Weather (props){
    function handleResponse(response){
        alert(
            `The weather in ${response.data.name} is ${response.data.main.temp}°C`
        );
    }
    let apiKey = "f7bcaae56975747b83d88801e136e5f9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    
    
    
}