import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
  }

  if (loaded) {
    let apiKey = "accd6b75554184ea54b4d2360ba258b0";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return null;
  } else {
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
}
