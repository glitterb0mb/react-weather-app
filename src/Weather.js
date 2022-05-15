import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      ready: true,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather.description,
      date: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });

    function search() {
      const apiKey = "37f507b0f9180073cac0e3095b325fe0";
      let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiURL).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleChange(event) {
      setCity(event.target.value);
    }

    if (weatherData.ready) {
      return (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search Location"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleChange}
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
          <WeatherInfo data={weatherData} />
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}
