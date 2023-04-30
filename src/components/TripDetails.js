import React, { useEffect } from "react";
import Card from "./weatherCard/Card";
import "./TripDetails.css";
const TripDetails = (props) => {
  console.log(props);
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          marginTop: "10px",
          display: "inline-block",
        }}
      >
        <h3> TRIP DETAILS</h3>
        <p>From :- {props.tripData.locationData.starting.formatted_address}</p>
        <p>To :- {props.tripData.locationData.ending.formatted_address}</p>
        <p>
          Can start journey now :-
          {props.tripData.weatherData.currentWeather.canStart === true
            ? "yes"
            : "no"}
        </p>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <h4>Current weather</h4>
              <Card
                now={true}
                weather={props.tripData.weatherData.currentWeather}
              ></Card>
            </td>
            <td>
              <h4>future weather</h4>
              {props.tripData.weatherData.futureWeather.map((weather) => {
                return <Card now={false} weather={weather}></Card>;
              })}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default TripDetails;
