import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather (props){
    
    const[weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        });

    }

    function search() {
        const apiKey = "5ea09e8580063191dd08cfebcb59b6ab";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if(weatherData.ready){
        return(
            <div className="Weather">
                
                <div className="row">
                    <nav>
                        <form onSubmit={handleSubmit}>
                            <div className="col-9">
                                <input className="form-control mr-sm-2" 
                                type="search" 
                                placeholder="Enter a city" 
                                aria-label="Search" 
                                onChange={handleCityChange}
                            />
                            </div>
                            <div className="col-3">
                                <button className="btn">
                                    <i className="fa fa-search"></i>
                                </button>
                                <button className="btn btn-succes">
                                    <i className="fas fa-location-arrow"></i>
                                </button>

                            </div>
                        </form>
                    </nav>
                    
                </div>
                <WeatherInfo data={weatherData}/>
    
            </div>
        );

    } else {
        search();
        return "Loading...";
    } 
    
}