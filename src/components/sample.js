import React, { useState } from "react";

const UseState = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        console.log(prevState);
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          complex increase
        </button>
      </section>
    </>
  );
};

export default UseState;
