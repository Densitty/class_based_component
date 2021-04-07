import React, { Component } from "react";
import Book from "./Book";
import data from "./data";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    // this method of setting state will be used if we are going 2 make use of the props
    this.state = {
      books: data,
      name: "John",
    };
  }

  render() {
    return (
      <section>
        <h3>This is our Booklist</h3>
        {this.state.books.map((item) => {
          return <Book list={item} key={item.id} />;
        })}
      </section>
    );
  }
}
