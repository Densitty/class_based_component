import React, { Component } from "react";

export default class Book extends Component {
  render() {
    console.log(this.props);
    // by the power of destructuring
    const { book, author } = this.props.list;
    /* list is the name attribute on Book in BookList */
    return (
      <article>
        <h3>Book Title: {book}</h3>
        <h5>Author: {author}</h5>
      </article>
    );
  }
}
