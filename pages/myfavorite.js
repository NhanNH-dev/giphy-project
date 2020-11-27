import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { TRASH } from "../public/svg";

const MyFavorite = () => {
  const [value, setValue] = useState([]);

  const handleRemoveImage = (itemRemove) => {
    const arr = [...value];
    const filteredItems = arr.filter(
      (item) => item.images.fixed_width.url !== itemRemove
    );
    window.localStorage.setItem("my-favorite", JSON.stringify(filteredItems));
    showNotification();
    setValue(filteredItems);
  };

  useEffect(() => {
    const json = localStorage.getItem("my-favorite" || undefined);
    const items = JSON.parse(json);
    const filterDuplicateItem = items.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
    setValue(filterDuplicateItem);
  }, []);

  const showNotification = () => {
    var x = document.getElementById("myNotification");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);
  };

  return (
    <Layout>
      <Header />
      <div className="alert alert-success" id="myNotification" role="alert">
        Removed!
      </div>
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
                  {TRASH}
                </button>
              </div>
            </div>
          ))}
      </div>
      {value.length < 1 && (
        <div className="emptyImg">
          <h3 className="text-emptyImg">Empty!</h3>
        </div>
      )}
    </Layout>
  );
};

export default MyFavorite;
