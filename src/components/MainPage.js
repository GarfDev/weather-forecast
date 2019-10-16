import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherCards from "./WeatherCards"

export default function MainPage(props) {
    return (
        <div className="container-fluid main-container">
            <WeatherCards weatherData={props.weatherList} todayData={props.todayWeather}/>
        </div>
    )
}
