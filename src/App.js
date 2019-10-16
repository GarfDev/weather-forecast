import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading"
import MainPage from "./components/MainPage"


function App() {
  const [isLoading, setLoading] = useState(true)
  const [weatherData, setWeatherData] = useState([])
  const [todayData, setTodayData] = useState(null)
  if(isLoading) return <Loading getLoading={setLoading} changeWeatherData={setWeatherData} changeTodayData={setTodayData}/>
  return <MainPage weatherList={weatherData} todayWeather={todayData}/>
}

export default App;
