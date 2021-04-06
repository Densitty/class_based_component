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

  /* handleDelete = (id) => {
    // filter through and return the book item(s) which matches not the id passed
    const sortedBooks = this.state.books.filter((book) => {
      console.log(book);
      return book.id !== id;
    });

    // 
    this.setState({
      books: sortedBooks,
    });
  };
 */
  handleDelete = (id) => {
    const bookToRemoveID = this.state.books.findIndex((book) => {
      return book.id === id;
    });

    this.state.books.splice(bookToRemoveID, 1);

    /* console.log(bookToRemoveID);
    const newBooks = [...this.state.books];
    newBooks.splice(bookToRemoveID, 1); */

    this.setState({
      books: this.state.books,
      /* books: newBooks */
    });
  };

  render() {
    return (
      <section>
        <h3>This is our Booklist</h3>
        {this.state.books.map((item) => {
          return <Book list={item} key={item.id} delete={this.handleDelete} />;
        })}
      </section>
    );
  }
}
