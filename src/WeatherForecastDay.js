import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.data[0].weather[0].icon} size={35} />
      <div className="ForecastTemp">
        <span className="tempMin">{minTemp()}°</span>
        <span className="tempMax">{maxTemp()}°</span>
      </div>
    </div>
  );
}
