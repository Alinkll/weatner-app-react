import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ action: false });
  const [city, setCity] = useState(props.defaultCity);

  let [text, setText] = useState("");
  let [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      action: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (weatherData.action) {
    return (
      <div className="appContainer">
        <div className="search">
          <form onSubmit={handleSubmit} id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  onChange={updateCity}
                  type="search"
                  placeholder="Type a city.."
                  autoFocus="on"
                  autoComplete="off"
                  id="cityName"
                  className="form-control"
                />
              </div>
              <div className="col-3 p-0">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col">
            <div className="currentCity">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>Wednesday 10:00</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <img
              id="mainIcon"
              alt={weatherData.description}
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              width="200px"
            />
          </div>
          <div className="col" id="digit">
            <ul>
              <li>
                <span id="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="units">°C</span>
              </li>
              <li id="weather">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const units = "metric";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);
    return "Loading.....";
  }
}
