import React, { useState } from "react";
import { data } from "./data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      // return people.filter((person) => {
      //   return person.id !== id;
      // });
      const persons = [...people];
      const personIndex = persons.findIndex((person) => {
        return person.id === id;
      });
      persons.splice(personIndex, 1);
      return persons;
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List peopleData={people} deletePerson={removePerson} />
    </section>
  );
};

const List = (props) => {
  const { peopleData } = props;
  const { deletePerson } = props;
  return (
    <>
      {peopleData.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} removeOne={deletePerson} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removeOne }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removeOne(id)}>remove</button>
    </div>
  );
};
export default PropDrilling;
