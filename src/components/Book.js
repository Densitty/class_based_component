import React, { Component } from "react";

export default class Book extends Component {
  render() {
    console.log(this.props);
    // by the power of destructuring
    const { title, author, image } = this.props.list;
    /* list is the name attribute on Book in BookList */
    return (
      <article className="book">
        <img src={image} width="150" alt="title" />
        <div>
          <h3>Title: {title}</h3>
          <p>Author: {author}</p>
        </div>
      </article>
    );
  }
}
