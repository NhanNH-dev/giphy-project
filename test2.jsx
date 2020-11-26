import React, { Component } from "react";

export class test2 extends Component {
  constructor(props) {
    this.state = {
      name: "",
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
        <span> them the span</span>
      </React.Fragment>
    );
  }
}

export default test2;
