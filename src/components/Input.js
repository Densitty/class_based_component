import React from "react";

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const name = this.refs.myName;
    const email = this.email;
    const text = this.refs.myText;

    text.style.color = "red";
    console.log(
      `My name is ${name.value} and my mail address is ${email.value}`
    );
  };

  render() {
    return (
      <section>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" ref="myName" />
          <input
            type="email"
            placeholder="email"
            ref={(param) => (this.email = param)}
          />
          <button type="submit">submit</button>
        </form>
        <p ref="myText">Hello People</p>
      </section>
    );
  }
}

export default Form;
