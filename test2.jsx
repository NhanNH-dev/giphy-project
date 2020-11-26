import React, { Component } from "react";

export class test2 extends Component {
  constructor(props) {
    this.state = {
      name: "Fernando Torres",
      age: 32
    };
  }
  render() {
    return (
      <React.Fragment>
        <strong>class component!</strong>
        <span> them the span</span>
        <span> them the span</span>
        <span> them the span</span>
        <span> them the span</span>
        <h2>{this.state.name}</h2>
      </React.Fragment>
    );
  }
}

export default test2;
