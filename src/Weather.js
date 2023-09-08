import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ action: false });
  const [city, setCity] = useState(props.defaultCity);

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
  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const units = "metric";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);
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

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return "Loading.....";
  }
}
