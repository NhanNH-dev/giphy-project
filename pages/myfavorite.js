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
      <h2 className="myfavorite">MyFavorite page</h2>
      <div className="row row-cols-1 row-cols-md-4">
        {value &&
          value.length > 0 &&
          value.map((item, i) => (
            <div key={i} className="col mb-4">
              <div className="card">
                <img
                  src={item.images.fixed_width.url}
                  style={{
                    width: item.images.fixed_width.width + "px",
                    height: item.images.fixed_width.height + "px",
                  }}
                  className="card-img-top"
                  alt={item.username}
                />
                <div className="card-body">
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      handleRemoveImage(item.images.fixed_width.url)
                    }
                    title="Add My Favorite"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-trash2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.18 4l1.528 9.164a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836L12.82 4H3.18zm.541 9.329A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671L14 3H2l1.721 10.329z"
                      />
                      <path d="M14 3c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z" />
                      <path
                        fillRule="evenodd"
                        d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {value.length < 1 && <p>No have Data</p>}
    </Layout>
  );
};

export default MyFavorite;
