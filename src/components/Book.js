import React, { Component } from "react";

export default class Book extends Component {
  state = {
    count: 0,
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    console.log(this.props);
    // by the power of destructuring
    const { title, author, image } = this.props.list;

    // const { handleDelete } = this.props;
    /* list is the name attribute on Book in BookList */

    const checkInfo = (info, book_title, book_name) => {
      if (info) {
        return `Readers are learners and learners are reader, goes a wise saying. We value knowledge, which is why we have brought you this book, titled, ${book_title}, authored by ${book_name} for your reading pleasure.`;
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={image} width="150" alt="title" />
        <div>
          <h3>Title: {title}</h3>
          <h4>Author: {author}</h4>
          <button type="button" onClick={this.handleInfo}>
            toggle info
          </button>
          {/* using function to render a conditional statement */}
          {<p>{checkInfo(this.state.showInfo, title, author)}</p>}
          {/* using ternary operator */}
          {/* {this.state.showInfo
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum, aliquid amet ad magni consequatur?"
            : null} */}
          {/* using AND operator to display info */}
          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptatum, aliquid amet ad magni consequatur
            </p>
          )} */}
        </div>
      </article>
    );
  }
}

/* 
{this.state.showInfo
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum, aliquid amet ad magni consequatur?"
              : null}
*/
