import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

const MyFavorite = () => {
  const [value, setValue] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleRemoveImage = (itemRemove) => {
    const arr = [...value];
    const filteredItems = arr.filter(
      (item) => item.images.fixed_width.url !== itemRemove
    );
    window.localStorage.setItem("my-favorite", JSON.stringify(filteredItems));
    setSuccess(true);
    setValue(filteredItems);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  useEffect(() => {
    const json = localStorage.getItem("my-favorite" || undefined);
    const items = JSON.parse(json);
    const filterDuplicateItem = items.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
    setValue(filterDuplicateItem);
  }, []);

  return (
    <Layout>
      <Header />
      {success && (
        <div className="alert alert-success" role="alert">
          Remove Successfully!
        </div>
      )}
      <div className="gridForImage">
        {value &&
          value.length > 0 &&
          value.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{ position: "relative" }}
            >
              <img
                src={item.images.fixed_width.url}
                className="rounded gridForItem"
                alt={item.username}
              />
              <div className="card-footers overlay">
                <button
                  className="btn btn-danger text"
                  onClick={() => handleRemoveImage(item.images.fixed_width.url)}
                  title="Add My Favorite"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-trash-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
      </div>
      {value.length < 1 && (
        <div className="emptyImg">
          <h3 className='text-emptyImg'>Empty!</h3>
        </div>
      )}
    </Layout>
  );
};

export default MyFavorite;
