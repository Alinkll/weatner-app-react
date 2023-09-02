import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="currentCity">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <CurrentDate date={props.data.date} />
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <WeatherIcon code={props.data.icon} size={125} />
      </div>
      <div className="col" id="digit">
        <ul>
          <WeatherTemperature celsius={props.data.temperature} />

          <li id="weather">{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
