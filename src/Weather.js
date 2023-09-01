import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="appContainer">
      <div className="search">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="off"
                autocomplete="off"
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
            <h1></h1>
            <ul>
              <li>Wednesday 10:00</li>
              <li>Humidity: 70%</li>
              <li>Wind: 15 km/h</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <img
            id="mainIcon"
            alt="sun"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            width="200px"
          />
        </div>
        <div className="col" id="digit">
          <ul>
            <li>
              <span id="temperature">20</span> <span className="units">°C</span>
            </li>
            <li id="weather">Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
