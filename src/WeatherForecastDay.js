import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="ForecastDay">{props.data[0].dt}</div>
      <WeatherIcon code={props.data[0].weather[0].icon} size={35} />
      <div className="ForecastTemp">
        <span className="tempMin">{props.data[0].temp.min}°</span>
        <span className="tempMax">{props.data[0].temp.max}°</span>
      </div>
    </div>
  );
}
