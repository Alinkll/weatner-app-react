import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [city, setCity] = useState(" ");
  let [text, setText] = useState("");
  let [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(response);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);

    setText(
      <ul>
        <li>Temperature: {Math.round(temperature.data.main.temp)}°C</li>
        <li>Description: {temperature.data.weather[0].description}</li>
        <li>Humidity: {temperature.data.main.humidity}%</li>
        <li>Wind: {temperature.data.wind.speed}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${temperature.data.weather[0].icon}@2x.png`}
            alt={temperature.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div class="App">
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>

      <h2>{text}</h2>
    </div>
  );
}

export default App;
