import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="forecast-temperature">
              <span className="forecast-temperature-max">
                {forecast[0].temp.max}°
              </span>
              <span className="forecast-temperature-min">10</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5fa2faaa4e46f78f76779e5b2f6cbebc";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
