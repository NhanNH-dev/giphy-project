import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const clickSubmit = (e) => {
    e.preventDefault();
    if (value != "") {
      router.push({
        pathname: "/",
        query: { value },
      });
      setValue("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const formSearchGif = () => (
    <form className='form_search' onSubmit={clickSubmit}>
      <div
        className="form-group inputSearch_Btn"
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
