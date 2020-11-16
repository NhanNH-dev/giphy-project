import React from "react";

const ItemImage = ({ image, handleClick }) => {
  const {
    images: {
      fixed_width: { url: u, width: w, height: h },
    },
    username: user,
  } = image;

  return (
    <div className="col mb-4">
      <div className="card">
        <img
          src={u}
          style={{ width: w + "px", height: h + "px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{user}</h5>
          <button
            className="btn btn-success"
            onClick={() => handleClick(image)}
            title="Add My Favorite"
          >
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
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemImage;
