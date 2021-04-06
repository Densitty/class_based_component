import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.lowerCount = this.lowerCount.bind(this);
  }

  state = {
    count: 0,
  };

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  lowerCount() {
    if (this.state.count <= 1) {
      this.setState({ count: 0 });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    // console.log(this.props);
    // by the power of destructuring
    const { title, author, image } = this.props.list;
    /* list is the name attribute on Book in BookList */
    return (
      <article className="book">
        <img src={image} width="150" alt="title" />
        <div>
          <h3>Title: {title}</h3>
          <h4>Author: {author}</h4>
          <p>Read: {this.state.count} times</p>
          <button /* the event handler */ onClick={this.addCount} type="button">
            add count
          </button>
          <button onClick={this.resetCount} type="button">
            reset count
          </button>
          <button onClick={this.lowerCount} type="button">
            lower count
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
