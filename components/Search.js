import { useState } from "react";
import { useRouter } from "next/router";
const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const clickSubmit = (e) => {
    e.preventDefault();
    if (value != "") {
      router.push(
        {
          pathname: "/",
          query: { value },
        },
        () => {
          setValue('');
        }
      );
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const formSearchGif = () => (
    <form onSubmit={clickSubmit}>
      <div
        style={{ display: "flex", width: "360px", marginLeft: "50px" }}
        className="form-group"
      >
        <input
          type="text"
          placeholder="Search all GIFs and TICKETs"
          className="form-control"
          onChange={handleChange}
          value={value}
          required
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );

  return <>{formSearchGif()}</>;
};

export default Search;
