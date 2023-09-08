import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="card">
      <p className="card-text">{forecastDay()}</p>
      <WeatherIcon code={props.data.weather[0].icon} size={100} />

      <div className="card-body">
        <p className="card-text">
          {Math.round(props.data.temp.max)}° <br />
          <span className="temperature-day-min">
            {Math.round(props.data.temp.min)}°
          </span>
        </p>
      </div>
    </div>
  );
}
