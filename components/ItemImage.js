import React, { useState } from "react";

const ItemImage = ({ image, handleClick }) => {
  const {
    images: {
      fixed_width: { url: u, width: w, height: h },
    },
    username: user,
  } = image;
  const [likes, setLikes] = useState(false);
  const handleAddMyFavorie = (image) => {
    setLikes(true);
    handleClick(image);
  };

  return (
    <div className="card" style={{position: 'relative'}}>
      <img
        src={u}
        className="rounded gridForItem"
        alt="gif"
      />
      <div className="card-footers overlay">
        <button
          className="btn btn-success text"
          onClick={() => handleAddMyFavorie(image)}
          title="Add My Favorite"
        >
          {likes ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-bookmark-heart-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
              />
            </svg>
          ) : (
            <svg
              width="1em"
              style={{ fontSize: "20px" }}
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-heart-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          )}
        </button>
      </div>
   
    </div>
  );
};
export default ItemImage;
