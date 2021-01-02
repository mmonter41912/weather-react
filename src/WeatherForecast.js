import React, {useState} from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
        setLoaded(true);
        setForecast(response.data);
        console.log(response.log);
    }

    if (loaded && props.city === forecast.city.name){
        return (
            <div className="WeatherForecast row">
                {forecast.list.slice(0,6).map(function(forecastItem){
                    return <WeatherForecastPreview data={forecastItem} />;

                })}
                ///<WeatherForecastPreview data={forecast.list[0]} />
            </div>
        );
    } else {
        let apiKey = "5ea09e8580063191dd08cfebcb59b6ab";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);

        return null;

    }
    
}