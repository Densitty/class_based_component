import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // we cannot place a hook inside a conditional; to set a conditional;
  useEffect(() => {
    console.log("call useEffect");
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  /* if the dependency is present in the array, the useEffect default behaviour will be experienced but if not (or if the array is empty), useEffect will only be rendered once */
  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Here
      </button>
    </>
  );
};

export default UseEffectBasics;
