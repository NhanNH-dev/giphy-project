import React, { useEffect, useState } from "react";

const ItemImage = (image) => {
  const [local, setLocalStorage] = useState([]);
  const {
    image: {
      images: {
        fixed_width: { url: u, width: w, height: h },
      },
      username: uu,
    },
  } = image;

  function handleClick(item) {
    const newArrImage = [...local, ...item];
    setLocalStorage(newArrImage);
    window.localStorage.setItem("my-favorite", JSON.stringify(local));
  }

  useEffect(() => {
    const img = JSON.parse(window.localStorage.getItem("my-favorite"));
    setLocalStorage(img);
  }, []);

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
          <h5 className="card-title">{uu}</h5>
          <button
            className="btn btn-success"
            onClick={() => handleClick(image)}
          >
            Add My Favorite
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemImage;
