import React, { useState } from "react";
import "./WeatherApp.css";
import clearIcon from "../Assets/clear.png";
import rainIcon from "../Assets/rain.png";
import snowIcon from "../Assets/snow.png";
import windIcon from "../Assets/wind.png";
import drizzleIcon from "../Assets/drizzle.png";
import searchIcon from "../Assets/search.png";
import cloudIcon from "../Assets/cloud.png";
import humidityIcon from "../Assets/humidity.png";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({
    humidity: "",
    windSpeed: "",
    temperature: "",
    location: "India",
  });

  const search = async () => {
    const cityInput = document.getElementsByClassName("cityInput")[0];

    if (cityInput.value === "") {
      return;
    }

    const apiKey = "b5d228ad0c10a6e6117c2d3db31e81e4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
        location: data.name,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="City" />
        <div className="search-icon" onClick={search}>
          <img src={searchIcon} alt="" />
        </div>
        <div className="weather-image">
          <img src={cloudIcon} alt="" />
        </div>
        <div className="weather-temp">{weatherData.temperature} °C</div>
        <div className="weather-location">{weatherData.location}</div>
        <div className="data-container">
          <div className="element">
            <img src={humidityIcon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{weatherData.humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windIcon} alt="" className="icon" />
            <div className="data">
              <div className="wind-rate">{weatherData.windSpeed} km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
