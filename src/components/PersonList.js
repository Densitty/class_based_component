import React, { Component } from "react";

import Person from "./Person";

class PersonList extends Component {
  state = {
    data: [
      {
        id: 1,
        image: "https://randomuser.me/api/portraits/men/73.jpg",
        name: "Nathaniel Austin",
        address: "3056 Preston Rd",
        age: 40,
      },
      {
        id: 2,
        image: "https://randomuser.me/api/portraits/women/30.jpg",
        name: "Brooklyn Riley",
        address: "3050 Prospect Rd",
        // age: 32,
      },
      {
        id: 3,
        image: "https://randomuser.me/api/portraits/women/85.jpg",
        name: "Erica Berry",
        address: "1046 Fairview St",
        age: 35,
      },
    ],
  };

  render() {
    return (
      <section>
        {this.state.data.map((person) => {
          console.log(person.address);
          return (
            <Person
              /* name={person.name}
              image={person.image}
              address={person.address}
              age={person.age} */
              person={person}
              key={person.id}
            />
          );
        })}
      </section>
    );
  }
}

export default PersonList;
