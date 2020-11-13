import React from "react";
import ItemImage from "./ItemImage";

const GirdImage = ({ listGif }) => (
  <div className="row row-cols-1 row-cols-md-4">
      {listGif && listGif.map((img, i) => <ItemImage key={i} image={img} />)}
  </div>
);
export default GirdImage;
