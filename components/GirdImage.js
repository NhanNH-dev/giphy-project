import React from "react";
import ItemImage from "./ItemImage";

const GirdImage = ({ listGif, handleClick }) => (
  <div className="row row-cols-1 row-cols-md-4">
    {listGif &&
      listGif.map((img, i) => (
        <ItemImage key={i} handleClick={handleClick} image={img} />
      ))}
  </div>
);
export default GirdImage;
