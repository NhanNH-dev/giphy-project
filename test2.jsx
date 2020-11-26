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
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
      </React.Fragment>
    );
  }
}

export default test2;
