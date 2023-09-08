import React from "react";

export default function WeatherTemperature(props) {
  return (
    <li>
      <span id="temperature">{Math.round(props.celsius)}</span>{" "}
      <span className="units">°C</span>
    </li>
  );
}
