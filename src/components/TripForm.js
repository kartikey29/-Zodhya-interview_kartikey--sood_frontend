import React, { useEffect, useState } from "react";
import AddressSearch from "./AddressSearch";
import axios from "axios";
import api from "../api";

const TripForm = (props) => {
  const [starting, setStarting] = useState();
  const [ending, setEnding] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res1 = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${starting}&key=AIzaSyBdg518uNlO9rNUH8NTuRC3vwUagl1LZzM`
      );
      const res2 = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${ending}&key=AIzaSyBdg518uNlO9rNUH8NTuRC3vwUagl1LZzM`
      );
      let data1 = res1.data;
      let data2 = res2.data;
      if (data1.status === "ZERO_RESULTS" || data2.status === "ZERO_RESULTS") {
        alert("Enter valid address");
      } else {
        let body = {
          locationData: {
            starting: data1.results[0],
            ending: data2.results[0],
          },
        };
        const res = await api.post("/weather", body);
        console.log(res.data);
        props.setTripData({ ...body, weatherData: res.data });
        props.setShow(true);
        setStarting("");
        setEnding("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <AddressSearch
          label="Enter starting point: "
          name="starting"
          setter={setStarting}
          value={starting}
        ></AddressSearch>
        <AddressSearch
          label="Enter Destination point: "
          name="ending"
          value={ending}
          setter={setEnding}
        ></AddressSearch>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TripForm;
