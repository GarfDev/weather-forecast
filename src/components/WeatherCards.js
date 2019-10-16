import React from "react";
import Moment from "react-moment";

const RightArrow = () => {
  return (
    <div className="nextArrow">
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true">
        adasdasdasd
      </i>
    </div>
  );
};

const LeftArrow = () => {
  return (
    <div className="backArrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true">
        asdasdasd
      </i>
    </div>
  );
};

export default function WeatherCards(props) {
  return (
    <div className="forecast-container fadeIn">
      <div className="container todayData">
        <h3>{props.todayData.name}</h3>
        <p>
          <Moment format="DD/MM/YYYY">{props.todayData.dt * 1000}</Moment>
        </p>
        <p>
            <span>{Math.round(props.todayData.main.temp_min - 273.15)} C</span> |{" "}
            <span>{Math.round(props.todayData.main.temp_max - 273.15)} C</span>
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${props.todayData.weather[0].icon}@2x.png`}
        ></img>
        <p>{props.todayData.weather[0].main}</p>
      </div>
      <div className="container cards-container">
        {props.weatherData.map(card => {
          return (
            <div className="forecast-card">
              <p>
                <Moment format="DD/MM/YYYY">{card.dt_txt}</Moment>
              </p>
              <img src=""></img>
              <p>
                <span>{Math.round(card.main.temp_min - 273.15)} C</span> |{" "}
                <span>{Math.round(card.main.temp_max - 273.15)} C</span>
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
              ></img>
              <p>{card.weather[0].main}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
