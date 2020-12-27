import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"

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
                <div className="row">
                    <div className="col-4">
                    
                        <WeatherIcon 
                            code = {props.data.icon}
                        />
                        <WeatherTemperature fahrenheit={props.data.temperature}/>
                    
                    </div>
                    <div className="col-8 person">
                        <img src="images/WalkingDog.svg" alt="Person"/>
                    </div>
                </div>
                <div className="row">
                <ul className="humidity">
                            <li>
                                Humidity: {props.data.humidity}%
                            </li>
                            <li>
                                Wind: {props.data.wind} km/h
                            </li>
                        </ul>
                </div>
                
        </div>
    )
}