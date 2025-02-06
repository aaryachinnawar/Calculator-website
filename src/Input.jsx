import clear1 from "./clear 1.png";
import humidity1 from "./humidity 1.png";
import pressureWhite1 from "./pressure-white 1.png";
import "./input.css";
import sunriseWhite1 from "./sunrise-white 1 (1).png";
import sunsetWhite1 from "./sunset-white 1.png";
import eye1 from "./eye (1).png";
import wind1 from "./wind 1.png";
import { useState } from "react";
export default function Input({weather})
{


  return(
    <>
        <div className="weather-details">
            <div className="extra-details">
                <div className="UV">
                    <div className="text-time">
                        <div className="text-wrapper">Visibility</div>

                        <div className="div">{weather.visibility / 1000} km</div>
                    </div>

                    <img className="uv-white" alt="Uv white" src={eye1} />
                </div>

                <div className="pressure">
                    <div className="text-time-2">
                        <div className="text-wrapper-2">Pressure</div>

                        <div className="text-wrapper-3">{weather.pressure} hPa</div>
                    </div>

                    <img
                        className="pressure-white"
                        alt="Pressure white"
                        src={pressureWhite1}
                    />
                </div>

                <div className="wind-speed">
                    <div className="text-time-3">
                        <div className="text-wrapper">Wind Speed</div>

                        <div className="div">{weather.wind} m/s</div>
                    </div>

                    <img className="wind" alt="Wind" src={wind1} />
                </div>

                <div className="humidity">
                    <div className="text-time-4">
                        <div className="text-wrapper-2">Humidity</div>

                        <div className="text-wrapper-3">{weather.humidity}%</div>
                    </div>

                    <img className="img" alt="Humidity" src={humidity1} />
                </div>
            </div>

            <div className="icon-weather">
                <div className="overlap-group">
                    <div className="type-of-weather">{weather.description}</div>
                    <div>{weather.icon}</div>
                    <img className="clear" alt="Clear" src={clear1} />
                </div>
            </div>

            <div className="main-details">

                {/**TEMP */}
            <div className="text-wrapper-4" style={{fontSize:68}}>
            {weather.temp ? `${(weather.temp - 273.15).toFixed(1)}°C` : "N/A"}
          </div>

                {/**FEELS LIKE TEMP */}
                <div className="feels-like">
            <p className="element-c">
              <span className="span">
                {weather.feelsLike
                  ? `${(weather.feelsLike - 273.15).toFixed(1)}`
                  : "N/A"}
              </span>
              <span className="text-wrapper-5">°C</span>
            </p>
            <div className="text-wrapper-6">Feels like:</div>
          </div>

        {/**SUNSET */}
          <div className="sunset">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-7">Sunset</div>
                <div className="text-wrapper-8">
                  {new Date(weather.sunset * 1000).toLocaleTimeString("en-IN")}
                </div>
              </div>
            </div>
            <img className="sunset-white" alt="Sunset white" src={sunsetWhite1} />
          </div>

            {/**SUNRISE */}
            <div className="sunrise">
            <div className="text-time-5">
              <div className="text-wrapper-9">Sunrise</div>
              <div className="text-wrapper-8">
                {new Date(weather.sunrise * 1000).toLocaleTimeString("en-IN")}
              </div>
            </div>
            <img
              className="sunrise-white"
              alt="Sunrise white"
              src={sunriseWhite1}
            />
          </div>
        </div>
      </div>
    </>
  );
}