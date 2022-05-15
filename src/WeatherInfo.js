import React from "react";
import DateFormat from "./DateFormat";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateFormat date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
          </div>
          <div className="float-left">
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="unit">°F</span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind Speed: {props.data.wind}MPH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
