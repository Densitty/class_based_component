import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("window resized to :-", width);
    window.addEventListener("resize", checkSize);
    /* the return fxn gets invoked immediately the eventListener runs (with useEffect, we trigger it) and get the function body rendered first before another eventListener is triggered again (thus closing down the previous resize event before the next resize is triggered) */
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("component render");
  return (
    <>
      <h1>UseEffect Cleanup</h1>
      <h2>{width} px</h2>
    </>
  );
};

export default UseEffectCleanup;
