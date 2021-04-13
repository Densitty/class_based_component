import React, { useState } from "react";

const UseState = () => {
  // console.log(useState(value));
  // const value = useState("intro to hooks")[0];
  // const handler = useState("intro to hooks")[1];
  const [value, setValue] = useState("intro to hooks");

  const handleClick = () => {
    if (value === "intro to hooks") {
      setValue("React Hooks is Fun");
    } else {
      setValue("intro to hooks");
    }
  };
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseState;
