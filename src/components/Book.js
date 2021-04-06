import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    count: 1,
  };

  // the click attribute
  handleClick() {
    console.log(this.props);
  }

  // if we do not want to use the .bind(this), we can either use arrow fxn like below or like in line 48 (commented)
  hoverMe = () => {
    console.log(this.props.list.image);
  };

  render() {
    // console.log(this.props);
    // by the power of destructuring
    const { title, author, image } = this.props.list;
    /* list is the name attribute on Book in BookList */
    return (
      <article className="book">
        <img onMouseOver={this.hoverMe} src={image} width="150" alt="title" />
        <div>
          <h3>Title: {title}</h3>
          <p>Author: {author}</p>
          <button
            /* the event handler */ onClick={this.handleClick}
            type="button"
          >
            add count
          </button>
        </div>
      </article>
    );
  }
}

/* Another way of handling event callback */
/*
<button
  onClick={() => this.handleClick()}
  type="button"
>
  add count
</button>;
*/
