import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather (props){
    
    const[weatherData, setWeatherData] = useState({ ready: false});

    function handleResponse(response){
        
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Monday 07:00",
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });

    }

    if(weatherData.ready){
        return(
            <div className="Weather">
                
                <div className="row">
                    <nav className="navbar navbar-transparent" className="col">
                        <form className="form-inline" id="search-form">
                            <input className="form-control mr-sm-2" type="search" id="city-input" placeholder="Search" aria-label="Search" />
                            <button className="btn">
                                <i className="fa fa-search"></i></button>
                            <button className="btn btn-succes" id="currentLocationButton">
                                <i className="fas fa-location-arrow"></i></button>
                        </form>
                    </nav>
                    
                </div>
                <div className="row">
                 <h1 className="col">
                     {weatherData.city}
                 </h1>
                </div>
    
                <div className="row">
                    <div className="col">
                        
                        <h2>{weatherData.date}</h2>
                        <small className="text-capitalize">{weatherData.description}</small>
                      
                    </div>
                </div>
    
                <div className="col-4">
                    <img src={weatherData.icon} alt ={weatherData.description} className="float-left"/>
                
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="units">°F</span>
                    
    
                        <ul className="humidity">
                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                                Wind: {weatherData.wind} km/h
                            </li>
                        </ul>
    
                    <div className="col-8" className="person">
                        <img src="images/WalkingDog.svgs" alt="Person"/>
                    </div>
                
                </div>
    
    
            </div>
        );

    } else {
        const apiKey = "f7bcaae56975747b83d88801e136e5f9";
    
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    } 
    
}