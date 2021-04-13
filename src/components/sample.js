import React, { useState } from "react";
import { data } from "../data";

const UseState = () => {
  // console.log(useState(data));
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    /* const peopleData = [...people];
    const personIndex = peopleData.findIndex((person) => {
      return person.id === id;
    });

    peopleData.splice(personIndex, 1);
    // console.log(peopleData);
    setPeople(peopleData); */

    // alternatively
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseState;
