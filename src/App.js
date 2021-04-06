import React, { Component } from "react";
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <section>
        <h1>Book Application</h1>
        <BookList />
      </section>
    );
  }
}

export default App;
