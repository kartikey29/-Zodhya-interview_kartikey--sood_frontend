import React, { useEffect, useState } from "react";
import api from "../../api";
const RecentSearch = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      console.log("abcd");
      const res = await api.get("/search");
      setData(res.data.data);
    };
    getData();
  }, [props.tripData]);

  const mapData = (data) => {
    return data.map((d) => {
      return (
        <div>
          <div
            style={{
              border: "solid 1px black",
              padding: "10px",
              display: "inline-block",
              width: "500px",
            }}
          >
            <p>From : {d.from}</p>
            <p>To:- {d.to} </p>
            <p>
              Weather:- <b>{d.weather.weather[0].description}</b>
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <h3>Recent Searches</h3>
      <div>{mapData(data)}</div>
    </>
  );
};

export default RecentSearch;
