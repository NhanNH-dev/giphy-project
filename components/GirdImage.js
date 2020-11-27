import React from "react";
import ItemImage from "./ItemImage";

const GirdImage = ({ listGif, handleClick }) => (
  <div className="gridForImage">
    {listGif &&
      listGif.map((img, i) => (
        <div key={img.id} className="card-columns">
          <ItemImage  handleClick={handleClick} image={img} />
        </div>
      ))}
  </div>
);
export default GirdImage;
