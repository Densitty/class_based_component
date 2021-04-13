import React, { useState } from "react";

const UseState = () => {
  const john = {
    name: "John Doe",
    age: 24,
    message: "I love writing JavaScript",
  };

  // console.log(john);
  const [person, setPerson] = useState(john);

  const changeMessage = () => {
    // spread the person state value first and then add the property to be changed
    setPerson({ ...person, message: "I also like learning Python" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        clear items
      </button>
    </>
  );
};

export default UseState;
