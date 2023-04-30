import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../api";

const Tweets = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log(props.query);

      const res = await api.get("/weather", {
        params: { search: `delhi weather` },
      });
      console.log(res.data.data.statuses);
      setData(res.data.data.statuses);
    };
    getData();
  }, [props.tripData]);

  const mapData = (data) => {
    return data.map((d) => {
      return (
        <>
          <p key={d.id}>{d.text}</p>
        </>
      );
    });
  };

  return (
    <div
      style={{
        border: "solid black 1px",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <h3>Tweets</h3>
      {mapData(data)}
    </div>
  );
};

export default Tweets;
