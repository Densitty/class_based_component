import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    // console.log("called first: " + this.state.count);
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => this.setState({ count: this.state.count + 2 })
    );

    // this.setState({
    //   count: this.state.count + 2,
    // });
    // console.log("called third: " + this.state.count);
  };

  handleDecrease = () => {
    console.log("called first: " + this.state.count);
    this.setState(
      (state, props) => {
        return {
          count: state.count - props.amount,
        };
      },
      () => console.log("called second: " + this.state.count)
    );
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.handleIncrease}>
            increase
          </button>
          <span style={{ margin: "1rem" }}>count: {this.state.count}</span>
          <button type="button" onClick={this.handleDecrease}>
            decrease
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
