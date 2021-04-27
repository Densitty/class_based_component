import React, { useState, useEffect } from "react";
import { data } from "./../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default name");
  const id = useParams().id;
  // console.log(useParams().id);

  useEffect(() => {
    const newPerson = data.find((person) => {
      return person.id === parseInt(id);
    });
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people">Back to people</Link>
    </div>
  );
};

export default Person;
