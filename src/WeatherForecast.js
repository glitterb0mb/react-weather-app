import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "37f507b0f9180073cac0e3095b325fe0";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiURL).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Sat</div>
          <WeatherIcon code="02d" size={35} />
          <div className="ForecastTemp">
            <span className="tempMin">68°</span>
            <span className="tempMax">88°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
