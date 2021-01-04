import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState ("fahrenheit")
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function celsius() {
        return (props.fahrenheit - 32) * 5/9;
    }
    if (unit === "fahrenheit") {
        return(
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.fahrenheit)}</span>
                <span className="units">°F |{""} <a href="/" className="cel" onClick={showCelsius}>°C</a></span>
            </div>
        );

    } else {
        
        
        return(
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(celsius())}</span>
                <span className="units"> <a href="/" className="cel" onClick={showFahrenheit}>°F </a>{""}| °C </span>
            </div>
        );
    }
    
}