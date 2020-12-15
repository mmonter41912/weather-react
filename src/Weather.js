import React from "react";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather (){
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
             <h1 className="col" id="city">
                 San Francisco

             </h1>
            </div>

            <div className="row">
                <div className="col">
                    
                    <h2 className="realDateTime">Monday 09:33</h2>
                    <small className="description">Clear</small>
                  
                </div>
            </div>

            <WeatherTemperature />


        </div>
    )
    
    
    
}