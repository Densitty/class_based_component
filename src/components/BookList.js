import React, { Component } from "react";
import Book from "./Book";
import data from "./data";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    // this method of setting state will be used if we are going 2 make use of the props
    this.state = {
      books: data,
    };
  }

  // we can set the state here or inside the constructor
  /* state = {
    books: data,
  }; */

  render() {
    // const books = this.state.books.map((book_item, index) => {
    //   return book_item;
    // });
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
