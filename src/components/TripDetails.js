import React, { useEffect } from "react";
import Card from "./weatherCard/Card";
import "./TripDetails.css";
const TripDetails = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <div> TRIP DETAILS</div>
        <div>
          From :- {props.tripData.locationData.starting.formatted_address}
        </div>
        <div>To :- {props.tripData.locationData.ending.formatted_address}</div>
        <div>
          can start journey now :-
          {props.tripData.weatherData.currentWeather.canStart === true
            ? "yes"
            : "no"}
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <div>Current weather</div>
              <Card
                now={true}
                weather={props.tripData.weatherData.currentWeather}
              ></Card>
            </td>
            <td>
              <div>future weather</div>
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
