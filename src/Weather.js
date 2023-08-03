import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h2>Düsseldorf</h2>
      <ul>
        <li>Wednesday, 11:00</li>
        <li>Light rain showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="light rain showers" className="float-left"
          />
          <div className="float-left">
          <span className="temperature">18</span>
          <span className="unit">°C </span>
        </div>
        </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 60%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 12 km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
