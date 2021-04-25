import React, { useState, useContext } from "react";
import { data } from "./data";

const PersonContext = React.createContext();
// the moment we create the context, we have access to 2 components -> Provider (which works as a distributor, and wraps whatever the root component returns) and Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => {
        return person.id !== id;
      });
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / UseContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  console.log(removePerson);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={removePerson.bind(this, id)}>remove</button>
    </div>
  );
};
export default ContextAPI;
