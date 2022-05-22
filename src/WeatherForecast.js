import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "accd6b75554184ea54b4d2360ba258b0";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
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
