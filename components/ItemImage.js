import React, { useState, memo } from "react";
import { HEART, ADDED_MY_FAVORITE } from "../public/svg";
const ItemImage = memo(({ image, handleClick }) => {
  const {
    images: {
      fixed_width: { url: u },
    },
  } = image;
  const [likes, setLikes] = useState(false);
  const handleAddMyFavorie = (image) => {
    setLikes(true);
    handleClick(image);
  };

  return (
    <div className="card" style={{ position: "relative" }}>
      <img src={u} className="rounded gridForItem" alt="gif" />
      <div className="card-footers overlay">
        <button
          className="btn btn-success text"
          onClick={() => handleAddMyFavorie(image)}
          title="Add My Favorite"
        >
          {likes ? HEART : ADDED_MY_FAVORITE}
        </button>
      </div>
    </div>
  );
});
export default ItemImage;
