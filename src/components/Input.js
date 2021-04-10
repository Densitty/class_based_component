import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    // firstName: null,
    lastName: "",
    // lastName: null,
    people: [],
  };

  handleChange = (e) => {
    // we can target an input either by value or the name attribute
    /* console.log(e.target.value);
    console.log(e.target.name); */

    /* if (e.target.name === "firstName") {
      const textValue = e.target.value;
      this.setState({
        firstName: textValue,
      });
    }

    if (e.target.name === "lastName") {
      const textValue = e.target.value;
      this.setState({
        lastName: textValue,
      });
    } */

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    // console.log(firstName, lastName);

    if (firstName.length > 0 && lastName.length > 0) {
      const person = `${firstName} ${lastName}`;
      const personList = this.state.people;
      personList.push(person);
      this.setState({
        // spread the value of people of people of people
        // people: [...this.state.people, person],
        people: personList,
        firstName: "",
        lastName: "",
      });
      console.log(this.state.people);
    }
  };

  render() {
    return (
      <section>
        <article>
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="firstname"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="lastname"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
          </form>
        </article>

        <article>
          <h1>People</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

export default Form;
