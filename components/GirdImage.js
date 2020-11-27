import React from "react";
import ItemImage from "./ItemImage";

const GirdImage = ({ listGif, handleClick }) => (
  <div className="row row-cols-1 row-cols-md-4">
    {listGif &&
      listGif.map((img, i) => (
        <div key={img.id} className="card-columns">
          <ItemImage  handleClick={handleClick} image={img} />
        </div>
      ))}
  </div>
);
export default GirdImage;
