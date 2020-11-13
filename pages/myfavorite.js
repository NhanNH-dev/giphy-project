import React, { Component } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

export class MyFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }
  componentDidMount() {
    const json = localStorage.getItem("my-favorite");
    const items = JSON.parse(json);
    this.setState({ value: [items, this.state.value] });
  }
  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Header />
        <h2 className="myfavorite">MyFavorite page</h2>
        {value &&
          value.length > 0 &&
          value.map((item, i) => (
            <img
              key={i}
              src={item.image?.images?.fixed_width?.url}
              style={{
                width: item.image?.images?.fixed_width?.width + "px",
                height: item.image?.images?.fixed_width?.height + "px",
              }}
              className="card-img-top"
              alt={item.image?.images?.fixed_width?.webp_size}
            />
          ))}
      </Layout>
    );
  }
}

export default MyFavorite;
