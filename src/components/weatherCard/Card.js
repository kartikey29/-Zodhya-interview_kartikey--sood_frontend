import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  //https://openweathermap.org/img/wn/10d@2x.png

  let { weather } = props;
  return (
    <div className={classes.container}>
      <div>
        Can travel :-{" "}
        <span style={weather.canStart ? { color: "green" } : { color: "red" }}>
          {weather.canStart ? "Yes!" : "No"}
        </span>
      </div>
      <h3>{props.now === true ? "Now" : weather.dt_txt}</h3>
      <div>
        <img
          alt="weathericon"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
        <p>{weather.weather[0].main}</p>
      </div>
      <p>Min Temp :- {(weather.main.temp_min - 273.15).toFixed(2)}</p>
      <p>Max Temp :- {(weather.main.temp_max - 273.15).toFixed(2)}</p>
      <p>feels like :- {(weather.main.temp - 273.15).toFixed(2)}</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default Card;
