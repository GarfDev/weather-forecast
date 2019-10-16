import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading(props) {
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeatherData(position.coords.latitude, position.coords.longitude);
    getTodayData(position.coords.latitude, position.coords.longitude);
  });

  async function getTodayData(latitude, longitude) {
    const API_KEY = "380dddc3f0ec41ca8c9d1c038397b245";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    let response = await fetch(url).catch(error => alert(error));
    let data = await response.json().catch(error => alert(error));
    props.changeTodayData(data);
    console.log(data);
    props.getLoading(false);
  }

  async function getWeatherData(latitude, longitude) {
    const API_KEY = "380dddc3f0ec41ca8c9d1c038397b245";
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&cnt=45`;
    let response = await fetch(url).catch(error => alert(error));
    let dates = [];
    let data = await response.json().catch(error => alert(error));
    let cleaneData = data.list.filter(card => {
      let Datez = new Date(card.dt * 1000);
      let Day = Datez.getDay();
      console.log("Day", Day);
      console.log(card.dt * 1000);
      if (!dates.includes(Day)) {
        dates.push(Day);
        return true;
      } else {
        return false;
      }
    });
    props.changeWeatherData(cleaneData);
  }

  return (
    <div className="container-fluid loading-container fadeIn">
      <ClipLoader
        sizeUnit={"px"}
        size={150}
        color={"#123abc"}
        loading={true}
      />
      <h1>Loading...</h1>
    </div>
  );
}
