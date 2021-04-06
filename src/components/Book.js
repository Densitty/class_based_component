import React, { Component } from "react";

export default class Book extends Component {
  state = {
    count: 0,
  };

  render() {
    console.log(this.props);
    // by the power of destructuring
    const { id, title, author, image } = this.props.list;

    // const { handleDelete } = this.props;
    /* list is the name attribute on Book in BookList */

    return (
      <article className="book">
        <img src={image} width="150" alt="title" />
        <div>
          <h3>Title: {title}</h3>
          <h4>Author: {author}</h4>
          <button type="button" onClick={() => this.props.delete(id)}>
            delete me
          </button>
        </div>
      </article>
    );
  }
}
