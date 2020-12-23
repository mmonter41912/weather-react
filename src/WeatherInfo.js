import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                 <h1 className="col">
                     {props.data.city}
                 </h1>
                </div>
    
                <div className="row">
                    <div className="col">
                        
                        <h2><FormattedDate date = {props.data.date} /></h2>
                        <small className="text-capitalize description">{props.data.description}</small>
                      
                    </div>
                </div>
    
                <div className="col-4">
                    <div className="float-left">
                        <WeatherIcon 
                            code = {props.data.icon} 
                            alt={props.data.description}
                        />
                    </div>
                    
                    <img src={props.data.icon} alt ={props.data.description} className="float-left"/>
                
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="units">°F</span>
                    
    
                        <ul className="humidity">
                            <li>
                                Humidity: {props.data.humidity}%
                            </li>
                            <li>
                                Wind: {props.data.wind} km/h
                            </li>
                        </ul>
    
                    <div className="col-8 person">
                        <img src="images/WalkingDog.svg" alt="Person"/>
                    </div>
                
                </div>
        </div>
    )
}