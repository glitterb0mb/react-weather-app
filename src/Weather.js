import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search">Search Location</input>
      </form>
      <h1>Atlanta, GA</h1>
      <ul>
        <li>Saturday 10:45PM</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          71°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 74%</li>
            <li>Wind Speed: 1MPH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}