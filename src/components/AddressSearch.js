import { useRef, useEffect, useState } from "react";
import axios from "axios";
const AddressSearch = (props) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      props.setter(place.name);
    });
  }, []);

  const changeHandler = (e) => {
    let value = e.target.value;
    props.setter(value);
  };
  return (
    <>
      <label>{props.label}</label>
      <input
        style={{ width: "400px", margin: "5px" }}
        value={props.value}
        name={props.name}
        ref={inputRef}
        onKeyDown={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        onChange={changeHandler}
      />
    </>
  );
};
export default AddressSearch;
