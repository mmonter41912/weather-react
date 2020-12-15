import React from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherTemperature (){
    return (
        <div className="WeatherTemperature">
            <div className="col-4">
            <img src="images/01d@2x.png" class= "scaled" alt ="clear" id="icon"/>
            
            <span className="tempNumber"></span>
            <span className="units"></span>
            <a href="#" id="fahrenheit-link" class="active">°F</a> | <a href="#" id="celsius-link">°C</a>

                <ul class="humidity">
                        <li>
                            Humidity: <span id="humidity"></span>%
                        </li>
                        <li>
                            Wind: <span id="wind"></span> km/h
                        </li>
                </ul>

                <div className="col-8" className="person">
                    <img src="images/WalkingDog.svg" alt="Person"/>
                </div>
            
            </div>
                    
        </div>
    )
}