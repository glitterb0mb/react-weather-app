import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search Location"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Atlanta, GA</h1>
      <ul>
        <li>Saturday 10:45PM</li>
        <li>Clear</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
              className="float-left"
            />
          </div>
          <div className="float-left">
            <span className="temp">68</span>
            <span className="unit">°F</span>
          </div>
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
