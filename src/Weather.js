import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [ready, setReady] = useState(false);

  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      ready: true,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather.description,
      date: "Saturday 10:45PM",
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });

    if (weatherData.ready) {
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
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-5">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-left"
                />
              </div>
              <div className="float-left">
                <span className="temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°F</span>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}</li>
                <li>Wind Speed: {weatherData.wind}MPH</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      const apiKey = "37f507b0f9180073cac0e3095b325fe0";
      let city = "Atlanta";
      let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
      axios.get(apiURL).then(handleSubmit);

      return "Loading...";
    }
  }
}
