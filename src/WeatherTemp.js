import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
     <span className="temperature">{Math.round(fahrenheit())}°F</span>
     </div>
     );
  }

