import React, { memo } from "react";
import ItemImage from "./ItemImage";

const GirdImage = memo(({ listGif, handleClick }) => (
  <div className="gridForImage">
    {listGif &&
      listGif.map((img) => (
        <div key={img.id} className="card-columns">
          <ItemImage handleClick={handleClick} image={img} />
        </div>
      ))}
  </div>
));
export default GirdImage;
