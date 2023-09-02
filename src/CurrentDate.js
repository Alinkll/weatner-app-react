import React from "react";
import "./Weather.css";

export default function CurrentDate(timeTemp) {
  let now = new Date(timeTemp.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];

  let hours = now.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
